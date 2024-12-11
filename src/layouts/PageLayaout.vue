<template>
    <div class="bg-ocean-night min-h-screen">
        <header class="bg-slate-900/95 shadow-xl sticky top-0 z-10">
            <nav class="flex justify-between">
                <div class="flex justify-center items-center p-4">
                    <img class="w-12 h-12 mr-2" src="/logo.png" alt="Logo">
                    <div>
                        <h1 class="text-white text-xl font-semibold md:text-2xl">Design Fashion AI</h1>
                    </div>
                </div>

                <!-- Desktop Menu -->
                <ul class="flex-1 justify-around items-center text-white font-medium text-md hidden md:flex">
                    <RouterLink :to="{ name: 'home' }" class="flex items-center px-5 py-2.5 me-2 mb-2"
                        :class="{ 'border-b-2': route.name === 'home' }">
                        <HomeIcon />
                        Inicio
                    </RouterLink>
                    <RouterLink to="/explore" class="flex items-center px-5 py-2.5 me-2 mb-2"
                        :class="{ 'border-b-2': route.name === 'Explore' }">
                        <TShirtIcon />
                        Explorar
                    </RouterLink>
                    <RouterLink v-if="auth.user" :to="{ name: 'generations' }" class="flex items-center px-5 py-2.5 me-2 mb-2"
                        :class="{ 'border-b-2': route.name === 'generations' }">
                        <CreateDesignIcon />
                        Generar
                    </RouterLink>
                    <button v-if="auth.user" @click="auth.logout" class="flex items-center px-5 py-2.5 me-2 mb-2">
                        <LogoutIcon class="mr-1" />
                        Salir
                    </button>
                </ul>

                <!-- Login Button (Desktop) -->
                <div v-if="!auth.user" class="md:flex justify-center items-center p-4 hidden">
                    <RouterLink to="/login"
                        class="text-gray-800 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        Iniciar sesión
                    </RouterLink>
                </div>

                <!-- Mobile Menu Button -->
                <div class="flex items-center md:hidden">
                    <button @click="toggleMenu" class="p-2">
                        <MobileMenuIcon />
                    </button>
                </div>
            </nav>
        </header>

        <!-- Mobile Sidebar -->
        <transition name="slide">
            <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-20" @click="closeMenu">
                <div class="w-64 h-full bg-slate-900 text-white shadow-xl z-30" @click.stop>
                    <div class="flex items-center justify-between p-4 border-b border-slate-700">
                        <h2 class="text-lg font-semibold">Menú</h2>
                        <button @click="closeMenu" class="text-white">
                            <CloseErrorIcon />
                        </button>
                    </div>
                    <ul class="flex flex-col p-4 space-y-4">
                        <RouterLink :to="{ name: 'home' }" class="flex items-center" @click="closeMenu">
                            <HomeIcon class="mr-2" />
                            Inicio
                        </RouterLink>
                        <RouterLink to="/explore" class="flex items-center" @click="closeMenu">
                            <TShirtIcon class="mr-2" />
                            Explorar
                        </RouterLink>
                        <RouterLink v-if="auth.user" :to="{ name: 'generations' }" class="flex items-center" @click="closeMenu">
                            <CreateDesignIcon class="mr-2" />
                            Generar
                        </RouterLink>
                        <button v-if="auth.user" @click="auth.logout" class="flex items-center">
                            <LogoutIcon class="mr-2" />
                            Salir
                        </button>
                        <RouterLink v-if="!auth.user" to="/login" class="flex items-center" @click="closeMenu">
                            <LoginIcon class="mr-2" />
                            Iniciar sesión
                        </RouterLink>
                    </ul>
                </div>
            </div>
        </transition>

        <!-- Main Content -->
        <slot name="main"></slot>
    </div>
</template>
<script setup>
    import { useAuthStore } from '@/stores/auth';
    import HomeIcon from '@/components/icons/HomeIcon.vue';
    import TShirtIcon from '@/components/icons/TShirtIcon.vue';
    import MobileMenuIcon from '@/components/icons/MobileMenuIcon.vue';
    import CreateDesignIcon from '@/components/icons/CreateDesignIcon.vue';
    import CloseErrorIcon from '@/components/icons/CloseErrorIcon.vue';
    import LoginIcon from '@/components/icons/LoginIcon.vue';
    
    import { ref } from 'vue';

    import { useRoute } from 'vue-router';
    import LogoutIcon from '@/components/icons/LogoutIcon.vue';

    const route = useRoute();
    const auth = useAuthStore();

    const isMenuOpen = ref(false);
    
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    }

    const closeMenu = () => {
        isMenuOpen.value = false;
    }
</script>