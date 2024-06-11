<template>
    <main class=" flex h-screen justify-center bg-home-radial-gradient items-center">

        <div class="w-10/12 md:w-2/5 bg-slate-900 rounded-xl  px-4">

            <RouterLink to="/">
                <div class="flex justify-center items-center px-4 pt-4 ">
                    <img class="w-8 h-8 md:h-14 md:w-14 mr-2" src="/logo.png" alt="Logo">
                    <div>
                        <h1 class="text-white text-2xl md:text-3xl font-semibold  ">Design Fashion AI</h1>
                    </div>
                </div>
            </RouterLink>

            <p v-if="!auth.registerErrors" class="my-2 text-gray-300 text-center">Ingrese sus credenciales</p>
            <div v-else class="flex justify-center  text-red-600">
                <p class="my-2 mr-2">{{ auth.registerErrors.message }} </p>
                <button @click="auth.clearRegisterErrors">x</button>
            </div>

            <form class="flex items-center flex-col p-2 " @submit.prevent="register">
                <input
                    class="mb-4 outline-none bg-gray-800 placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-r placeholder:from-teal-200 placeholder:to-lime-200 text-white text-sm rounded-lg w-full md:w-2/3 p-2.5"
                    type="text" v-model="form.first_name" placeholder="Nombres" />
                <input
                    class="mb-4 outline-none bg-gray-800 placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-r placeholder:from-teal-200 placeholder:to-lime-200 text-white text-sm rounded-lg w-full md:w-2/3 p-2.5"
                    type="text" v-model="form.last_name" placeholder="Apellidos" />
                <input
                    class="mb-4 outline-none bg-gray-800 placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-r placeholder:from-teal-200 placeholder:to-lime-200 text-white text-sm rounded-lg w-full md:w-2/3 p-2.5"
                    type="email" v-model="form.email" placeholder="Correo" />
                <input
                    class="mb-4 outline-none bg-gray-800 placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-r placeholder:from-teal-200 placeholder:to-lime-200 text-white text-sm rounded-lg w-full md:w-2/3 p-2.5"
                    type="password" v-model="form.password" placeholder="Contraseña" />
                <input
                    class="mb-4 outline-none bg-gray-800 placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-r placeholder:from-teal-200 placeholder:to-lime-200 text-white text-sm rounded-lg w-full md:w-2/3 p-2.5"
                    type="password" v-model="form.password_confirmation" placeholder="Confirmar contraseña" />
                <PrimaryButton type="submit" text="Registrarse" :loading="auth.registerLoading" />
            </form>

            <p class=" text-white text-center mb-4">¿Ya tienes una cuenta?
                <RouterLink to="/login"
                    class="text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200 hover:to-lime-200 hover:from-teal-200">
                    Inicia sesion.
                </RouterLink>
            </p>
        </div>
    </main>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import PrimaryButton from '@/components/PrimaryButton.vue';

const auth = useAuthStore();

const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const register = async () => {
    await auth.register(form.value);
}
</script>