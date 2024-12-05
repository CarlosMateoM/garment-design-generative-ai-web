<template>
    <div class="bg-ocean-night">

        <!-- header -->
        <header class="bg-slate-900/95 shadow-xl sticky top-0 z-10">

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

                        <HomeIcon />

                        Inicio

                    </RouterLink>
                    <RouterLink to="/explore" class="flex items-center px-5 py-2.5 me-2 mb-2"
                        :class="{ 'border-b-2': route.name === 'Explore' }">

                        <TShirtIcon />

                        Explorar
                    </RouterLink>

                    <RouterLink :to="{ name: 'generateDesign' }" class="flex items-center px-5 py-2.5 me-2 mb-2"
                        :class="{ 'border-b-2': route.name === 'generateDesign' }">

                        <CreateDesignIcon />

                        Crear Diseño
                    </RouterLink>

                </ul>

                <div class="md:flex justify-center items-center p-4 hidden">
                    <RouterLink to="/login"
                        class="text-gray-800 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        Iniciar sesión
                    </RouterLink>
                </div>

                <div class="flex items-center md:hidden">
                    <MobileMenuIcon />
                </div>
            </nav>

        </header>

        <!-- main -->

        <slot name="main"></slot>





        <!-- footer
        <footer class="mt-8 p-8">
            <div class="flex justify-center items-center p-4">
                <img class="w-24 h-24 mr-2" src="/logo.png" alt="Logo">
                <div>
                    <h2 class="text-white text-4xl font-semibold">Design Fashion AI</h2>
                    
                </div>
            </div>
        </footer>
        -->

    </div>
</template>
<script setup>
    import HomeIcon from '@/components/icons/HomeIcon.vue';
    import TShirtIcon from '@/components/icons/TShirtIcon.vue';
    import MobileMenuIcon from '@/components/icons/MobileMenuIcon.vue';
    import CreateDesignIcon from '@/components/icons/CreateDesignIcon.vue';

    import { useRoute } from 'vue-router';

    const route = useRoute();
</script>