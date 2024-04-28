<template>
    <Layout>
        <template #main>
            <section class="relative flex gap-4 flex-wrap h-screen justify-between flex-col p-4 overflow-hidden">

                <div class="flex w-4/6 max-md:w-full justify-between h-full flex-col ">
                    <div ref="scrollableDiv" class=" overflow-y-scroll mb-4 rounded-md pr-2">
                        <div v-for="image in garmentDesign.garmentDesignsChat" class="bg-gray-100 mt-4 rounded-md p-4">
                            <img @click="openImageModal(image)" class="mx-auto w-2/3 rounded-md" :key="image.id"
                                :src="image.url" alt="Placeholder" />
                            <h3 class="font-bold mt-2">
                                Descripción:
                            </h3>
                            <p class="text-gray-700 mt-2  ">
                                {{ image.prompt }}
                            </p>
                        </div>
                    </div>
                    <ErrorAlert class="hidden max-md:flex" v-if="garmentDesign.createGarmentDesignErrors"
                        :error="garmentDesign.createGarmentDesignErrors"
                        @closeErrorAlert="garmentDesign.clearCreateGarmentDesignErrors" />

                    <form class="" @submit.prevent="generateImage">

                        <textarea v-model="form.prompt" id="message" rows="4"
                            class="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-slate-800 focus:border-slate-800 "
                            placeholder="Describe tu prenda de vestir..."></textarea>


                        <button type="submit" :disabled="garmentDesign.createGarmentDesignLoading"
                            class="flex w-full px-4 py-2 mt-2 outline-none border-2 border-slate-900 focus:border-slate-800 text-white font-bold bg-slate-800 rounded-md hover:bg-slate-900">

                            <template v-if="!garmentDesign.createGarmentDesignLoading">
                                <span class="flex-1 text-center ms-2 font-bold whitespace-nowrap">Crear</span>
                            </template>

                            <svg v-else aria-hidden="true" role="status"
                                class="mx-auto inline w-6 h-6 text-white animate-spin" viewBox="0 0 100 101" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                    </form>
                </div>

                <div class="max-md:hidden w-2/6 ">
                    <div class="container ">
                        <div class="max-w-md bg-slate-800 text-white rounded-lg shadow-lg overflow-hidden mx-auto">

                            <h2 class="m-4 text-2xl font-bold">Encuesta</h2>

                            <div class="m-4">
                                <div class="flex w-full mt-2" v-for="survey in survey.surveyPending">
                                    <img class="w-14 rounded-md" :src="survey.url" alt="" srcset="">
                                    <button @click="openSurveyModal(survey)"
                                        class="ml-2 w-full bg-slate-700 hover:bg-slate-600 font-bold text-white p-2 rounded-lg">Calificar</button>
                                </div>
                            </div>

                            <div v-if="survey.surveyPending.length > 0"
                                class="flex items-center mx-4 p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 "
                                role="alert">
                                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">Recuerda!</span> Por favor, califica el diseño de la
                                    prenda para seguir
                                    usando la aplicación.
                                </div>
                            </div>

                            <div v-else
                                class="flex items-center p-4 mb-4 mx-4 text-sm text-green-800 rounded-lg bg-green-50 "
                                role="alert">
                                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">Perfecto!</span> No tienes encuestas pendientes.
                                </div>
                            </div>

                            <ErrorAlert class="mx-4" v-if="garmentDesign.createGarmentDesignErrors"
                            :error="garmentDesign.createGarmentDesignErrors"
                            @closeErrorAlert="garmentDesign.clearCreateGarmentDesignErrors" />

                        </div>

                    </div>
                </div>

                <button v-if="survey.surveyPending.length > 0" type="button"
                    @click="openSurveyModal(survey.surveyPending[0])"
                    class="hidden absolute top-8 right-4 rounded-full max-md:inline-flex items-center p-3 text-sm font-medium text-center text-white bg-slate-700  hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-900 ">
                    <NotificationIcon />
                    <span class="sr-only">Notifications</span>
                    <div
                        class="absolute animate-pulse inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-2 end-1">

                    </div>
                </button>

            </section>
        </template>
    </Layout>

    <VueFinalModal v-model="isShowImageModalOpen" content-transition="vfm-fade" overlay-transition="vfm-fade"
        teleport-to="body" class="flex justify-center items-center"
        content-class="max-w-6xl flex bg-white border rounded-lg space-y-2  overflow-auto md:h-5/6">
        <img width="1024" height="1024" :src="img.url" :alt="img.description" class="w-full" />
    </VueFinalModal>

    <VueFinalModal v-model="isSurveyModalOpen" content-transition="vfm-fade" overlay-transition="vfm-fade"
        teleport-to="body" class="flex justify-center items-center"
        content-class="max-w-6xl h-5/6 bg-white border rounded-lg space-y-2 overflow-y-auto">
        <SurveyView :img="img" @closeSurveyModal="() => isSurveyModalOpen = false" />
    </VueFinalModal>

</template>
<script setup>
import SurveyView from '@/views/SurveyView.vue';
import ErrorAlert from '@/components/ErrorAlert.vue';
import NotificationIcon from '@/components/icons/NotificationIcon.vue';

import { useGarmentDesignStore } from '@/stores/garmentDesign';
import { useSurveyStore } from '@/stores/survey';
import { useAuthStore } from '@/stores/auth';

import { VueFinalModal } from 'vue-final-modal'
import Layout from '@/layouts/Layout.vue';
import { onMounted, ref } from 'vue';

const auth = useAuthStore();
const garmentDesign = useGarmentDesignStore();
const survey = useSurveyStore();

const img = ref({});
const isSurveyModalOpen = ref(false);
const isShowImageModalOpen = ref(false);

const openImageModal = (image) => {
    img.value = image;
    isShowImageModalOpen.value = true;
}

const openSurveyModal = (image) => {
    img.value = image;
    isSurveyModalOpen.value = true;
}

const form = ref({
    prompt: ''
});

const scrollableDiv = ref(null);

const scrollToBottom = () => {
    scrollableDiv.value.scrollTop = scrollableDiv.value.scrollHeight;
}

const generateImage = async () => {
    await garmentDesign.createGarmentDesign(form.value);
    await survey.getSurveyStatus();
    await getImages();
    scrollToBottom();
    await auth.getUser();
}

const getImages = async () => {
    if (!auth.user) { await auth.getUser() }
    const response = await garmentDesign.getGarmentDesigns(`filter[user_id]=${auth.user.id}`);
    garmentDesign.garmentDesignsChat = response.data;
    scrollToBottom();
}

onMounted(async () => {

    if (garmentDesign.garmentDesignsChat.length === 0) {
        await getImages();
    }

    if (survey.surveyPending.length === 0) {
        await survey.getSurveyStatus();
    }

    scrollToBottom();
});


</script>@/stores/survey