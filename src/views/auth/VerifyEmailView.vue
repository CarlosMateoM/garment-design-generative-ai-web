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
                Hemos enviado un correo electrónico de verificación a <strong >{{ auth?.user?.email }}</strong>. Por
                favor, revisa tu bandeja de entrada y sigue las instrucciones para verificar tu cuenta.
            </p>

            <p class="text-white text-center text-balance pb-4">
                Si no has recibido el correo de verificación, haz clic en el siguiente botón para reenviarlo.
            </p>

            <div class="flex justify-center">
                <PrimaryButton text="Reenviar correo de verificación" @click="sendVerificationEmail" :loading="sendVerificationEmailLoading"/>
            </div>
        </div>
    </main>

    

</template>
<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

const auth = useAuthStore();

const {
    getUser, 
    sendVerificationEmail,
    sendVerificationEmailLoading
} = useAuthStore();

onMounted(async () => {
    await getUser();
});

</script>