<template>
    <PageLayaout>
        <template v-slot:main>
            <main class="pt-12" style="background: radial-gradient(circle at center 40% , #346482 0%, #0f172a 95%)" >
                  
                    <h2
                    class="text-center uppercase text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                        Explora el Mundo de las Prendas Generadas por AI
                    </h2>

                    <p class="text-center font-semibold text-xl text-white/90 mt-4 mb-12 ">
                        Estilos personalizados, impulsado por la innovación tecnológica.
                    </p>
                

                <section class="mx-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <template v-for="image in garmentDesign.garmentDesigns.data" :key="image.id">
                        <ImageDesignCard :image="image" @showImage="showImage" />
                    </template>
                </section>
            </main>
        </template>
    </PageLayaout>
</template>
<script setup>
import { useGarmentDesignStore } from '@/stores/garmentDesign';
import ImageDesignCard from '@/components/ImageDesignCard.vue';
import PageLayaout from '@/layouts/PageLayaout.vue';
import { ref, onMounted } from 'vue';

const garmentDesign = useGarmentDesignStore();
const isModalOpen = ref(false);
const img = ref({});

const showImage = (image) => {
    isModalOpen.value = true;
    img.value = image;
}

const getGarmentDesigns = async () => {
    const response = await garmentDesign.getGarmentDesigns(`sort=-created_at&include=images`);
    garmentDesign.garmentDesigns = response.data;
}

onMounted(async () => {
    if (garmentDesign.garmentDesigns.length === 0)
         await getGarmentDesigns();
});
</script>