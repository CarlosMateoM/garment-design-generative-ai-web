import { useRequest } from "@/composables/useRequest";
import { defineStore } from "pinia";
import axios from "@/axios";
import { ref } from "vue";

export const useSurveyStore = defineStore("surveyStatus", () => {

    const surveyPending = ref([]);

    const {
        request: getSurveyStatus,
        loading: surveyStatusLoading,
        errors: surveyStatusErrors,
        clearErrors: clearSurveyStatusErrors
    } = useRequest(
        async () => {
            const response = await axios.get("user-survey-status");
            surveyPending.value = response.data;
            return response;
        }
    );

    const {
        request: createSurveyResponse,
        loading: surveyResponseLoading,
        errors: surveyResponseErrors,
        clearErrors: clearSurveyResponseErrors
    } = useRequest(
        async (form) => {
            const response = await axios.post('quality-indicators', form);
            surveyPending.value = surveyPending.value.filter(survey => survey.id !== form.garmentDesignId);
            return response; 
        }
    )

    return {

        createSurveyResponse,
        surveyResponseLoading,
        surveyResponseErrors,
        clearSurveyResponseErrors,


        surveyPending,
        getSurveyStatus,
        surveyStatusLoading,
        surveyStatusErrors,
        clearSurveyStatusErrors
    }

});