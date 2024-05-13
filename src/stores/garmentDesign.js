import { useRequest } from "@/composables/useRequest";
import { defineStore } from "pinia";
import axios from "@/axios";
import { ref } from "vue";

export const useGarmentDesignStore = defineStore("garmentDesign", () => {

    const garmentDesigns = ref([]);
    const garmentDesign = ref(null);
    const garmentDesignsChat = ref([]);

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
        request: getGarmentDesign,
        loading: garmentDesignLoading,
        errors: garmentDesignErrors,
        clearErrors: clearGarmentDesignErrors
    } = useRequest(
        async (id) => {
            const response = await axios.get(`garment-designs/${id}`);
            garmentDesign.value = response.data;
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

        garmentDesignsChat,

        garmentDesigns,
        getGarmentDesigns,
        garmentDesignsLoading,
        garmentDesignsErrors,
        clearGarmentDesignsErrors,

        garmentDesign,
        getGarmentDesign,
        garmentDesignLoading,
        garmentDesign,

        createGarmentDesign,
        createGarmentDesignLoading,
        createGarmentDesignErrors,
        clearCreateGarmentDesignErrors,


    }
});
