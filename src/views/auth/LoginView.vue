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
    <p v-if="!auth.loginErrors" class="my-2 text-gray-300 text-center" >Ingrese sus credenciales</p>
    <div v-else class="flex justify-center  text-red-600">
        <p class="my-2 mr-2" >{{ auth.loginErrors.message }} </p>
        <button @click="auth.clearLoginErrors" >x</button>
    </div>


    <form class="flex items-center flex-col p-2 " @submit.prevent="login">
        
        <input class="mb-4 outline-none bg-gray-800 placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-r placeholder:from-teal-200 placeholder:to-lime-200 text-white text-sm rounded-lg w-full md:w-2/3 p-2.5" type="email" v-model="form.email" placeholder="Correo" />
        <input class="mb-4 outline-none bg-gray-800 placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-r placeholder:from-teal-200 placeholder:to-lime-200 text-white text-sm rounded-lg w-full md:w-2/3 p-2.5" type="password" v-model="form.password" placeholder="Contraseña" />
        
        <PrimaryButton text="Iniciar Sesion" type="submit" :loading="auth.loginLoading" />
    </form>

    <p class=" text-white text-center mb-4" >¿No tienes una cuenta? 
        <RouterLink to="/register" 
        class="text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200 hover:to-lime-200 hover:from-teal-200">
            Registrate.
        </RouterLink>
    </p>
</div>
</main>
        
</template>
<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const auth = useAuthStore();

const form = ref({
    email: '',
    password: ''
});

const login = async () => {
    await auth.login(form.value);
}

</script>