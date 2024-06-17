<template>
    <header class="justify-between bg-slate-800 p-4 hidden max-md:flex ">
        <div @click="" class="flex items-center">
            <img width="360" height="360" src="/logo.png" alt="design ai logo" class="w-10" />
            <div class="ml-2">
                <p class="text-xl text-white font-bold">DESIGN FASHON AI</p>
            </div>
        </div>

        <div>
            <RouterLink v-if="!auth.user" :to="{ name: 'Login' }"
                class="flex w-full px-4 py-2 outline-none border-2 border-slate-500 focus:border-slate-400 text-white font-bold bg-slate-500 rounded-md hover:bg-slate-600">
                <LoginIcon />
                <span class="flex-1 text-start ms-2 font-bold whitespace-nowrap">Iniciar sesion</span>
            </RouterLink>

            <div v-else>

                <button @click="auth.logout" 
                    class="flex w-full px-4 py-2 outline-none border-2 border-red-500 focus:border-red-400 text-white font-bold bg-red-500 rounded-md hover:bg-red-600">

                    <template v-if="!auth.logoutLoading">
                        <SinupIcon />
                        <span class="flex-1 text-start ms-2 font-bold whitespace-nowrap">Cerrar sesión</span>
                    </template>

                    <LoadingIcon class="mx-auto" v-else />
                </button>

            </div>
        </div>


    </header>
    <nav class="bg-slate-800 hidden max-md:block">
        <ul class="flex justify-between">
            <li v-if="auth.user" class="flex items-center text-white font-semibold ml-2 ">
                <p> {{ auth.user.credits }} </p>
                <CreditsIcon class="w-4 mx-1" />
                <p>Credito</p>
            </li>
            <li v-if="auth.user" :class="{ 'bg-gray-700': route.name === 'Profile' }" >
                <router-link :to="{ name: 'Profile' }" class="text-white p-4">
                    Perfil
                </router-link>
            </li>
            <li :class="{ 'bg-gray-700': route.name === 'Home' }" >
                <router-link :to="{ name: 'Home' }" class="text-white p-4">Explorar</router-link>
            </li>
            <li v-if="auth.user" :class="{ 'bg-gray-700': route.name === 'GarmentDesign' }" >
                <router-link :to="{ name: 'GarmentDesign' }" class="text-white p-4">Crear prendas</router-link>
            </li>
        </ul>
    </nav>


</template>
<script setup>
import LoginIcon from '@/components/icons/LoginIcon.vue';
import LoadingIcon from '@/components/icons/LoadingIcon.vue';
import CreditsIcon from '@/components/icons/CreditsIcon.vue';
import SinupIcon from '@/components/icons/SinupIcon.vue';

import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const route = useRoute();
const auth = useAuthStore();
</script>