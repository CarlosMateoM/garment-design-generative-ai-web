<template>
    <Layout>
        <template #main>

            <button class="flex justify-center border" >
                <RefreshIcon :class="{'animate-spin': garmentDesign.garmentDesignsLoading }" class="w-8 h-8 my-4 text-slate-800" @click="getGarmentDesigns" />
            </button>

            <section class="mx-4 my-10">
                <h1 class="w-full text-center m-4 font-bold text-3xl text-slate-800">
                    Explora el Mundo de las Prendas Generadas por AI
                </h1>
                <p class="w-full text-center text-slate-600">
                    Estilos personalizados, impulsado por la innovación tecnológica.
                </p>
            </section>

            <section class="mx-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <template v-for="image in garmentDesign.garmentDesigns" :key="image.id"  >
                    <ImageDesignCard  textClass="text-gray-800" :image="image" @showImage="showImage" />
                </template>
            </section>
        </template>
    </Layout>

    <VueFinalModal v-model="isModalOpen" 
        content-transition="vfm-fade" 
        overlay-transition="vfm-fade" 
        teleport-to="body"
        class="flex justify-center items-center bg-black bg-opacity-50"
        content-class="flex max-sm:flex-col h-5/6 m-2 p-4 max-w-5xl bg-white border rounded-lg space-y-2"
    >
        <ImageDesignModal :img="img" />
    </VueFinalModal>

    <EmailVerifiedModal /> 

</template>
<script setup>
import { VueFinalModal } from 'vue-final-modal'
import EmailVerifiedModal from '@/views/auth/EmailVerifiedModal.vue';
import { useGarmentDesignStore } from '@/stores/garmentDesign';
import ImageDesignCard from '@/components/ImageDesignCard.vue';
import ImageDesignModal from '@/components/ImageDesignModal.vue';
import RefreshIcon from '@/components/icons/RefreshIcon.vue';
import Layout from '@/layouts/Layout.vue';
import { ref, onMounted } from 'vue';

const garmentDesign = useGarmentDesignStore();
const isModalOpen = ref(false);
const img = ref({});

const showImage = (image) => {
    isModalOpen.value = true;
    img.value = image;
}

const getGarmentDesigns = async () => {
    const response = await garmentDesign.getGarmentDesigns(`include=images&sort=-created_at`);
    garmentDesign.garmentDesigns = response.data.data;
}

onMounted(async () => {
    if(garmentDesign.garmentDesigns.length === 0)
        await getGarmentDesigns();
});

</script>