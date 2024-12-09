import { useRequest } from "@/composables/useRequest";
import { defineStore } from "pinia";
import axios from "@/axios";
import { ref } from "vue";

export const useGarmentDesignStore = defineStore("garmentDesign", () => {

    const design = ref(null);

    const garmentDesigns = ref([]);
    const userGarmentDesigns = ref({});

    const {
        request: getUserGarmentDesigns,
        loading: userGarmentDesignsLoading,
        errors: userGarmentDesignsErrors,
        clearErrors: clearUserGarmentDesignsErrors
    } = useRequest(
        async (id, params = '') => {
            const response = await axios.get(`garment-designs?filter[user_id]=${id}&${params}`);
            userGarmentDesigns.value = response.data;
            return response;
        }
    );

    const {
        request: getGarmentDesigns,
        loading: garmentDesignsLoading,
        errors: garmentDesignsErrors,
        clearErrors: clearGarmentDesignsErrors
    } = useRequest(
        async (params) => {
            const response = await axios.get(`garment-designs?${params}`);
            return response;
        }
    );

    const {
        request: getDesign,
        loading: getDesignLoading,
        errors: getDesignErrors,
        clearErrors: clearGetDesignErrors
    } = useRequest(
        async (id, params) => {
            const response = await axios.get(`designs/${id}?${params}`);
            design.value = response.data;
            return response;
        }
    );

    const {
        request: createGarmentDesign,
        loading: createGarmentDesignLoading,
        errors: createGarmentDesignErrors,
        clearErrors: clearCreateGarmentDesignErrors
    } = useRequest(
        async (form) => {
            const response = await axios.post("garment-designs", form);
            return response;
        }
    );

    const {
        request: updateGarmentDesign,
        loading: updateGarmentDesignLoading,
        errors: updateGarmentDesignErrors,
        clearErrors: clearUpdateGarmentDesignErrors
    } = useRequest(
        async (form, id) => {
            const response = await axios.put(`garment-designs/${id}`, form);
            garmentDesign.value = response.data;
            return response;
        }
    );

    const {
        request: deleteGarmentDesign,
        loading: deleteGarmentDesignLoading,
        errors: deleteGarmentDesignErrors,
        clearErrors: clearDeleteGarmentDesignErrors
    } = useRequest(
        async (id) => {
            const response = await axios.delete(`garment-designs/${id}`);
            garmentDesigns.value = garmentDesigns.value.filter(garmentDesign => garmentDesign.id !== id);
            return response;
        }
    );

    return {

        getUserGarmentDesigns,
        userGarmentDesigns,
        userGarmentDesignsLoading,
        userGarmentDesignsErrors,
        clearUserGarmentDesignsErrors,

        garmentDesigns,
        getGarmentDesigns,
        garmentDesignsLoading,
        garmentDesignsErrors,
        clearGarmentDesignsErrors,

        getDesign,
        design,
        getDesignLoading,
        getDesignErrors,
        clearGetDesignErrors,

        createGarmentDesign,
        createGarmentDesignLoading,
        createGarmentDesignErrors,
        clearCreateGarmentDesignErrors,


    }
});
