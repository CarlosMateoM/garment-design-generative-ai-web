<template>

    <Layout>

        <template #main>

            <section class="my-14">
                <h1 class="w-full text-center m-4 font-bold text-3xl text-slate-800">
                    Explora el Mundo de las Prendas Generadas por IA
                </h1>
                <p class="w-full text-center text-slate-600">Estilos personalizados, impulsado por la innovación tecnológica.</p>
            </section>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="image in garmentDesign.garmentDesigns" :key="image.id"
                    class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img @click="showImage(image)" :src="image.url" :alt="image.description"
                        class="w-full h-48 object-cover" loading="lazy" />
                    <div class="p-4">
                        <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ image.title }}</h2>
                        <p class="text-gray-700 leading-relaxed line-clamp-4">{{ image.prompt }}</p>
                    </div>
                </div>
            </div>

        </template>


    </Layout>


    <VueFinalModal v-model="isModalOpen" content-transition="vfm-fade" overlay-transition="vfm-fade" teleport-to="body"
        class="flex justify-center items-center"
        content-class="max-w-5xl flex m-2 p-4 bg-white border rounded-lg space-y-2  overflow-auto h-5/6">

        <img :src="img.url" :alt="img.description" class="w-full  object-cover" loading="lazy" />
        <div class="m-4">
            <h2 class="text-xl font-semibold text-slate-800 mb-2">Descripción</h2>
            <p class=" text-slate-700 leading-relaxed">{{ img.prompt }}</p>
            <button @click="downloadImage(img.url)"
                class="w-full px-4 py-2 mt-4 outline-none text-white font-bold bg-slate-800 rounded-md hover:bg-slate-900">
                Descargar
            </button>

        </div>


    </VueFinalModal>

    <ModalsContainer />
</template>
<script setup>
import { ModalsContainer, VueFinalModal } from 'vue-final-modal'
import { useGarmentDesignStore } from '@/stores/garmentDesign';
import Layout from '@/layouts/Layout.vue';
import { ref, onMounted } from 'vue';


const garmentDesign = useGarmentDesignStore();
const isModalOpen = ref(false);
const img = ref({});
const images = ref([]);


const downloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'garment-design.png';
    link.click();
}

const showImage = (image) => {
    isModalOpen.value = true;
    img.value = image;
}

const getGarmentDesigns = async () => {
    const response = await garmentDesign.getGarmentDesigns(`sort=-created_at`);
    garmentDesign.garmentDesigns = response.data;
}

onMounted(async () => {
    if(garmentDesign.garmentDesigns.length === 0)
        await getGarmentDesigns();
});

</script>