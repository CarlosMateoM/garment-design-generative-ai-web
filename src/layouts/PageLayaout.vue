<template>
    <div class="bg-home-radial-gradient">
        <header class="bg-slate-900/95  shadow-xl sticky top-0 z-10">

            <nav class="flex justify-between ">

                <div class="flex justify-center items-center p-4">
                    <img class="w-12 h-12 mr-2" src="/logo.png" alt="Logo">
                    <div>
                        <h1 class="text-white text-xl font-semibold md:text-2xl ">Design Fashion AI</h1>
                    </div>
                </div>

                <ul class="flex-1 justify-around items-center text-white font-medium text-md hidden md:flex">

                    <RouterLink to="/home" class="flex items-center px-5 py-2.5 me-2 mb-2"
                        :class="{ 'border-b-2': route.name === 'Home' }">
                        <svg class="inline-block mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>

                        Inicio

                    </RouterLink>
                    <RouterLink to="/explore" class="flex items-center px-5 py-2.5 me-2 mb-2"
                        :class="{ 'border-b-2': route.name === 'Explore' }">
                        <svg class="inline-block mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                        </svg>
                        Explorar
                    </RouterLink>
                </ul>

                <div class="md:flex justify-center items-center p-4 hidden">
                    <RouterLink to="/login"
                        class="text-gray-800 bg-white hover:bg-white/90  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        Iniciar
                        sesión
                    </RouterLink>
                </div>

                <div class="flex items-center md:hidden">
                    <svg class="m-4 text-white" xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </div>
            </nav>

        </header>

        <slot name="main"></slot>

        <footer class="mt-8 p-8">
            <div class="flex justify-center items-center p-4">
                <img class="w-24 h-24 mr-2" src="/logo.png" alt="Logo">
                <div>
                    <h1 class="text-white text-4xl font-semibold  ">Design Fashion AI</h1>
                </div>
            </div>
        </footer>

    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>