<template>
    <VueFinalModal v-model="visible" :click-to-close="true" content-transition="vfm-fade" overlay-transition="vfm-fade"
        teleport-to="body" class="flex justify-center items-center bg-black bg-opacity-50"
        content-class="flex flex-col  m-2 p-4 max-w-5xl bg-slate-900 rounded-lg ">


        <p class="text-4xl text-white font-light my-4 ">
            Ops, algo salió mal.
        </p>

        <h2 class="text-4xl text-white font-semibold mb-4">
            Impulsa tu creatividad dentro de nuestros lineamientos
        </h2>

        <p class="text-white text-lg mb-4">
            ¡Tu imaginación nos inspira! Para asegurar que tu diseño de prenda sea generado con éxito:
        </p>

        <ul class="text-white text-lg mb-4 list-disc list-inside">
            <li>Evita descripciones que puedan resultar ofensivas o inapropiadas.</li>
            <li>Enfócate en elementos de diseño positivos y creativos.</li>
            <li>Considera cómo tu creación puede ser percibida por una audiencia diversa.</li>
        </ul>

        <p class="text-white text-lg mb-6">
            Ajustando tu descripción, no solo cumplirás con nuestras políticas, sino que también potenciarás el alcance
            y el impacto positivo de tu diseño.
        </p>

        <PrimaryButton @click="visible = false" text="Entiendo" />


    </VueFinalModal>
</template>
<script setup>
    import { VueFinalModal } from 'vue-final-modal';
    import PrimaryButton from '@/components/PrimaryButton.vue';
    import { ref } from 'vue';

    const visible = ref(false);

    const toggleModal = () => {
        visible.value = !visible.value;
    }

    defineExpose({
        toggleModal
    })
</script>