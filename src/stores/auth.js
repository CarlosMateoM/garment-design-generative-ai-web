import { useRequest } from "@/composables/useRequest";
import { defineStore } from "pinia";
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
            const response = await axios.get("user");
            user.value = response.data;
            return response;
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
            user.value = response.data;
            router.push({name: "Home"});
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
            router.push({name: "Home"});
            return response;
        }
    );
    

    const {
        request: logout,
        loading: logoutLoading,
        errors: logoutErrors,
        clearErrors: clearLogoutErrors
    } = useRequest(async () => {
        await axios.post("logout");
        user.value = null;
        router.push({name: "Home"});
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

        logout,
        logoutLoading,
        logoutErrors,
        clearLogoutErrors,
    }
});