<template>

   <aside class="min-w-64 max-md:hidden">

      <nav class="fixed top-0 left-0 z-40 w-64 max-md:w-full h-screen transition-transform translate-x-0" aria-label="Sidebar">

         <div class="flex flex-col  justify-between h-full px-3 py-4 overflow-y-auto bg-gray-800">


            <ul class="space-y-2 font-medium">
               <div class="flex justify-between">
                  <div class="flex items-center mb-8">
                     <img src="/logo.png" alt="Logo" class="w-10" />
                     <div>
                        <p class="text-xl text-white ml-2 font-bold">DESIGN FASHION AI</p>
                     </div>
                  </div>
                  <button @click="toggleNavbar"
                     class="inline-flex items-center mb-8 p-2 mt-2 ms-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                     <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                           d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                     </svg>
                  </button>
               </div>

               <li v-if="auth.user"  @click="toggleNavbar">
                  <RouterLink :to="{ name: 'Profile' }"
                     :class="{ 'bg-gray-700 text-white': route.name === 'Profile' }"
                     class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                     <ProfileIcon />
                     <span class="flex-1 ms-3 whitespace-nowrap">Perfil</span>
                  </RouterLink>
               </li>

               <li @click="toggleNavbar" >
                  <RouterLink :to="{ name: 'Home' }" 
                     :class="{ 'bg-gray-700': route.name === 'Home' }"
                     class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                     <ExplorerIcon />
                     <span class="ms-3">Explorar</span>
                  </RouterLink>
               </li>


               <li v-if="auth.user"  @click="toggleNavbar">
                  <RouterLink :to="{ name: 'GarmentDesign' }"
                     :class="{ 'bg-gray-700': route.name === 'GarmentDesign' }"
                     class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group">
                     <CreateDesignIcon />
                     <span class="flex-1 ms-3 whitespace-nowrap">Crear Prendas</span>
                  </RouterLink>
               </li>
            </ul>


            <div>
               <RouterLink v-if="!auth.user" :to="{ name: 'Login' }"
                  class="flex w-full px-4 py-2 outline-none border-2 border-slate-500 focus:border-slate-400 text-white font-bold bg-slate-500 rounded-md hover:bg-slate-600">
                  <LoginIcon />
                  <span class="flex-1 text-start ms-2 font-bold whitespace-nowrap">Iniciar sesion</span>
               </RouterLink>

               <div v-else>

                  <div class="flex items-center mb-4 text-white font-semibold ml-2 ">
                     <p> {{ auth.user.credits }} </p>
                     <CreditsIcon class="w-4 mx-1" />
                     <p>Credito</p>
                  </div>


                  <button @click="logout" 
                     class="flex w-full px-4 py-2 outline-none border-2 border-red-500 focus:border-red-400 text-white font-bold bg-red-500 rounded-md hover:bg-red-600">

                     <template v-if="!auth.logoutLoading">
                        <SinupIcon />
                        <span class="flex-1 text-start ms-2 font-bold whitespace-nowrap">Cerrar sesión</span>
                     </template>

                     <LoadingIcon class="mx-auto"v-else />
                  </button>

               </div>
            </div>
         </div>

      </nav>

   </aside>
</template>
<script setup>
import CreateDesignIcon from '@/components/icons/CreateDesignIcon.vue';
import ExplorerIcon from '@/components/icons/ExplorerIcon.vue';
import LoadingIcon from '@/components/icons/LoadingIcon.vue';
import CreditsIcon from '@/components/icons/CreditsIcon.vue';
import ProfileIcon from '@/components/icons/ProfileIcon.vue';
import LoginIcon from '@/components/icons/LoginIcon.vue';
import SinupIcon from '@/components/icons/SinupIcon.vue';

import { useAuthStore } from '@/stores/auth';
import { useRoute } from 'vue-router';

const route = useRoute();
const auth = useAuthStore();

const logout = async () => {
   await auth.logout();
}

</script>