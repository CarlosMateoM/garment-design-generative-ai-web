<template>

    <VueFinalModal 
        v-model="visible" 
        :click-to-close="false" 
        content-transition="vfm-fade" 
        overlay-transition="vfm-fade" 
        teleport-to="body"
        class="flex justify-center items-center bg-black bg-opacity-50"
        content-class="flex flex-col m-2 p-4 max-w-5xl bg-slate-900 rounded-lg space-y-2"
    >

        <h2 class="text-4xl text-white font-semibold" >Email Verificado Correctamente</h2>
        
        <p class="text-white text-center" >¡Tu correo electrónico ha sido verificado correctamente!</p>

        <PrimaryButton text="Aceptar" @click="close" />
    </VueFinalModal>

</template>
<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import { VueFinalModal } from 'vue-final-modal';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import router from '@/router';

const route = useRoute();

const visible = ref(false);

const showEmailVerifiedModal = () => {
    if (route.query.email_verified) {
        visible.value = true;
    }
}

const close = () => {
    visible.value = false;
    router.push({name: 'Home'});
}

onMounted(() => {
    showEmailVerifiedModal();
});
</script>