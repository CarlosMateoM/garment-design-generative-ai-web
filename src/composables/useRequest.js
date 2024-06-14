import { useAuthStore } from '@/stores/auth';
import router from '@/router';
import { ref } from 'vue';

export const useRequest = (callback) => {

    const auth = useAuthStore();
    const loading = ref(false);
    const errors = ref(null);

    const request = async (form, params, id) => {
        try {
            loading.value = true;

            return await callback(form, params, id);

        } catch (error) {

            errors.value = error.response.data;

            if (error.response.status === 401) {
                auth.user = null;
                router.push({ name: "Home" });
            } else if (error.response.status === 409) {
                
                router.push({ name: "VerifyEmail" });
            }

            throw error;

        } finally {
            loading.value = false;
        }

    };

    const clearErrors = () => {
        errors.value = null;
    }

    return { request, loading, errors, clearErrors };

}