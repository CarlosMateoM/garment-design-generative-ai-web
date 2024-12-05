import { useRequest } from "@/composables/useRequest";
import { defineStore } from "pinia";
import axios from "@/axios";

export const useImageStore = defineStore("image", () => {


    const {
        request: createImage,
        loading: createImageLoading,
        errors: createImageErrors,
        clearErrors: clearCreateImageErrors
    } = useRequest(
        async (form) => {
            return await axios.post("images", form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
    );

    const {
        request: describeImage,
        loading: describeImageLoading,
        errors: describeImageErrors,
        clearErrors: clearDescribeImageErrors
    } = useRequest(
        async (form) => {
            return await axios.post("images/description", form);
        }
    );


    return {
        createImage,
        createImageLoading,
        createImageErrors,
        clearCreateImageErrors,

        describeImage,
        describeImageLoading,
        describeImageErrors,
        clearDescribeImageErrors
    }

});