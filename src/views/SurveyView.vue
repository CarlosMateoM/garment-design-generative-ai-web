<template>
    <div class="relative">
        <a href="#survey">
            <button
                class="w-full justify-center flex px-4 py-2 outline-none text-white font-bold bg-slate-800 rounded-md hover:bg-slate-900">
                Saltar a la encuesta
                <ArrowRigthIcon class="w-4 mx-1" />
            </button>
        </a>

        <div class="flex max-sm:flex-col mx-auto  m-2 p-4 max-w-5xl bg-white  rounded-lg spacemitse-y-4 ">
            <ImageDesignModal :img="img" />
        </div>

        <h3 id="survey" class="font-bold text-slate-900 p-4 text-2xl text-center">
            Tu opinión es importante para nosostros
        </h3>
        <p class="text-center text-sm mb-8 text-gray-600" >
            <HelpCircleIcon class="inline-flex" />
            preciona sobre el icono de ayuda para obtener más información sobre cada criterio de diseño.
        </p>

        <RatingDesign label="Originalidad" formName="originality" @ratingValue="setRatingValue"
            @openRatingHelp="setSelectedCriteriaHelp" />

        <RatingDesign label="Creatividad" formName="creativity" @ratingValue="setRatingValue"
            @openRatingHelp="setSelectedCriteriaHelp" />

        <RatingDesign label="Textura" formName="texture" @ratingValue="setRatingValue"
            @openRatingHelp="setSelectedCriteriaHelp" />

        <RatingDesign label="Estilística" formName="stylistics" @ratingValue="setRatingValue"
            @openRatingHelp="setSelectedCriteriaHelp" />

        <RatingDesign label="Funcionalidad" formName="functionality" @ratingValue="setRatingValue"
            @openRatingHelp="setSelectedCriteriaHelp" />

        <RatingDesign label="Viabilidad" formName="feasibility" @ratingValue="setRatingValue"
            @openRatingHelp="setSelectedCriteriaHelp" />

        <textarea id="message" rows="4" cols="70" v-model="form.feedback"
            class="block max-md:w-11/12 mx-auto outline-none p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-slate-800 focus:border-slate-800 "
            placeholder="¡Queremos escucharte! Comparte tus pensamientos sobre el diseño, especialmente lo más importante para ti."></textarea>


        <ErrorAlert class="mx-4" v-if="survey.surveyResponseErrors" :error="survey.surveyResponseErrors"
            @closeErrorAlert="survey.clearSurveyResponseErrors" />

        <div class="flex w-full p-4">
            <button v-if="!surveyResponsed" @click="submit" :disabled="survey.surveyStatusLoading"
                class="px-4 py-2 mt-2 outline-none mx-auto border-2 border-slate-900 focus:border-slate-800 text-white font-bold bg-slate-800 rounded-md hover:bg-slate-900">
                <span v-if="!survey.surveyStatusLoading">
                    Enviar
                    <SendIcon class="w-5 mx-1 inline-block" />
                </span>

                <svg v-else aria-hidden="true" role="status" class="mx-auto inline w-6 h-6 text-white animate-spin"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor" />
                </svg>
            </button>

            <button v-else @click="emits('closeSurveyModal')"
                class="px-4 py-2 mt-2 outline-none mx-auto border-2 border-slate-900 focus:border-slate-800 text-white font-bold bg-slate-800 rounded-md hover:bg-slate-900">
                ¡Gracias por responder! Haz click para cerrar la encuesta.
            </button>

        </div>


    </div>

    <RatingDesignInfo :criteria="criteriaHelp" @closeCriteriaInfoModal="clearCriteriaHelp" />

</template>
<script setup>
import ArrowRigthIcon from '@/components/icons/ArrowRigthIcon.vue';
import HelpCircleIcon from '@/components/icons/HelpCircleIcon.vue';
import RatingDesignInfo from '@/components/RatingDesignInfo.vue';
import ImageDesignModal from '@/components/ImageDesignModal.vue';
import RatingDesign from '@/components/RatingDesign.vue';
import ErrorAlert from '@/components/ErrorAlert.vue';
import SendIcon from '@/components/icons/SendIcon.vue';

import { criteriaInfo } from '@/assets/data/criteriaInfo';

import { useSurveyStore } from '@/stores/survey';
import { ref } from 'vue';

const criteriaHelp = ref(null);

const setSelectedCriteriaHelp = (name) => {
    criteriaHelp.value = criteriaInfo.find(criteria => criteria.title === name);
}

const clearCriteriaHelp = () => {
    criteriaHelp.value = null;
}

const emits = defineEmits(['closeSurveyModal']);


const survey = useSurveyStore();

const surveyResponsed = ref(false);

const props = defineProps({
    img: Object
});

const form = ref({
    garmentDesignId: props.img.id,
    originality: 0,
    creativity: 0,
    texture: 0,
    stylistics: 0,
    functionality: 0,
    feasibility: 0,
    feedback: ''
});

const setRatingValue = (formName, value) => {
    form.value[formName] = value;
};

const submit = async () => {

    const response = await survey.createSurveyResponse(form.value);

    if (response.status === 201) {
        surveyResponsed.value = true;
    }

}

</script>