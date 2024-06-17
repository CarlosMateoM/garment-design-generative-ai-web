<template>
    <main class=" flex h-screen justify-center bg-home-radial-gradient items-center">

        <div class="w-10/12 md:w-2/5 bg-slate-900 rounded-xl p-8">
            <RouterLink to="/">
                <div class="flex justify-center items-center">
                    <img class="w-8 h-8 md:h-14 md:w-14 mr-2" src="/logo.png" alt="Logo">
                    <div>
                        <h1 class="text-white text-2xl md:text-3xl font-semibold  ">Design Fashion AI</h1>
                    </div>
                </div>
            </RouterLink>

            <p class="text-white text-center text-balance py-4">
                Hemos enviado un correo electrónico de verificación a <strong>{{ auth?.user?.email }}</strong>. Por
                favor, revisa tu bandeja de entrada y sigue las instrucciones para verificar tu cuenta.
            </p>
            <div class="flex justify-center mb-4">
                <PrimaryButton text="Confirmar verificación" @click="confirmEmailVerification" />
            </div>

            <p class="text-white text-center text-balance pb-4">
                Si no has recibido el correo de verificación, haz clic en el siguiente botón para reenviarlo.
            </p>

            <div class="flex flex-col justify-center">
                <PrimaryButton text="Reenviar correo de verificación" @click="sendVerificationEmail" disable="true"
                    :loading="sendVerificationEmailLoading" />
            </div>
        </div>
    </main>


    <VueFinalModal v-model="visible" :click-to-close="false" content-transition="vfm-fade" overlay-transition="vfm-fade"
        teleport-to="body" class="flex justify-center items-center bg-black bg-opacity-50"
        content-class="flex flex-col  m-2 p-4 max-w-5xl bg-slate-900 rounded-lg space-y-2">

        <h2 class="text-4xl text-white font-semibold">Email No Confirmado</h2>

        <p class="text-white text-center">¡Tu correo electrónico aún no ha sido verificado!</p>

        <PrimaryButton text="Aceptar" @click="close" />

    </VueFinalModal>


</template>
<script setup>
import { VueFinalModal } from 'vue-final-modal';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';
import router from '@/router';


const auth = useAuthStore();

const visible = ref(false);

const {
    getUser,
    sendVerificationEmail,
    sendVerificationEmailLoading
} = useAuthStore();

const close = () => {
    visible.value = false;
}

const confirmEmailVerification = async () => {

    await getUser();

    if (!auth.user.email_verified_at) {
        visible.value = true;
        return;
    }

    router.push({ name: 'Home', query: { email_verified: '1' } });
}

onMounted(async () => {
    if (!auth.user) {
        await getUser();
    }
});

</script>