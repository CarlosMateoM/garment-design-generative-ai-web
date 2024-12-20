import { useRequest } from "@/composables/useRequest";
import { defineStore } from "pinia";
import echo from "@/echo";
import router from "@/router";
import axios from "@/axios";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {

    const user = ref(null);

    const {
        request: getUser,
        loading: userLoading,
        errors: userErrors,
        clearErrors: clearUserErrors
    } = useRequest(
        async () => {
            if (!user.value) {
                const response = await axios.get("user");
                user.value = response.data;
                return response;
            }
        }
    );

    const {
        request: login,
        loading: loginLoading,
        errors: loginErrors,
        clearErrors: clearLoginErrors
    } = useRequest(
        async (form) => {
            await axios.get("sanctum/csrf-cookie");

            const response = await axios.post("login", form);

            await getUser();

            if (user.value.email_verified_at === null) {

                router.push({ name: "VerifyEmail" });
            } else {
                router.push({ name: "home" });
            }

            echo.private(`image-processed.${user.value.id}`)
                .listen('ImageProcessedEvent', async (e) => {
                    router.push({ name: 'design.show', params: { id: e.garmentDesign.id } });
                });

            return response;
        }
    );

    const {
        request: register,
        loading: registerLoading,
        errors: registerErrors,
        clearErrors: clearRegisterErrors
    } = useRequest(
        async (form) => {
            await axios.get("sanctum/csrf-cookie");
            const response = await axios.post("register", form);
            user.value = response.data;
            router.push({ name: "VerifyEmail" });
            return response;
        }
    );

    const {
        request: sendVerificationEmail,
        loading: sendVerificationEmailLoading,
        errors: sendVerificationEmailErrors,
        clearErrors: clearSendVerificationEmailErrors
    } = useRequest(
        async () => {
            const response = await axios.post("email/verification-notification");
            if (response.data.status === "already-verified") {
                router.push({ name: "home" });
            }
        }
    )


    const {
        request: logout,
        loading: logoutLoading,
        errors: logoutErrors,
        clearErrors: clearLogoutErrors
    } = useRequest(async () => {
        echo.leaveChannel('image-processed');
        router.push({ name: "home" });
        await axios.post("logout");
        user.value = null;
    });


    return {

        user,
        getUser,
        userLoading,
        userErrors,
        clearUserErrors,

        login,
        loginLoading,
        loginErrors,
        clearLoginErrors,

        register,
        registerLoading,
        registerErrors,
        clearRegisterErrors,

        sendVerificationEmail,
        sendVerificationEmailLoading,
        sendVerificationEmailErrors,
        clearSendVerificationEmailErrors,

        logout,
        logoutLoading,
        logoutErrors,
        clearLogoutErrors,
    }
});