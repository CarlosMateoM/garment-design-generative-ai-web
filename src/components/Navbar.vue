<template>
   <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar"
      aria-controls="sidebar-multi-level-sidebar" type="button"
      class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
         xmlns="http://www.w3.org/2000/svg">
         <path clip-rule="evenodd" fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
         </path>
      </svg>
   </button>

   <nav id="sidebar-multi-level-sidebar"
      class="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar">


      <div class="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
         <ul class="space-y-2 font-medium">
            <div class="flex items-center mb-8">
               <img src="/logo.png" alt="Logo" class="w-10" />
               <div>
                  <p class="text-2xl text-white ml-2 font-bold">DESIGN AI</p>
                  <p class="text-xs font-normal ml-2 text-gray-200">Diseño de prendas</p>
               </div>
            </div>

            <li v-if="auth.user">
               <RouterLink :to="{ name: 'Profile' }"
                  :class="{ 'bg-gray-100 dark:bg-gray-700': route.name === 'Profile' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                     <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Perfil</span>
               </RouterLink>
            </li>

            <li>
               <RouterLink :to="{ name: 'Home' }" :class="{ 'bg-gray-100 dark:bg-gray-700': route.path === '/' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg xmlns="http://www.w3.org/2000/svg"
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                  </svg>
                  <span class="ms-3">Explorar</span>
               </RouterLink>
            </li>


            <li v-if="auth.user">
               <RouterLink :to="{ name: 'GarmentDesign' }"
                  :class="{ 'bg-gray-100 dark:bg-gray-700': route.name === 'GarmentDesign' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
                     <path d="M6 10l0 .01" />
                     <path d="M10 10l0 .01" />
                     <path d="M14 10l0 .01" />
                     <path d="M18 10l0 .01" />
                     <path d="M6 14l0 .01" />
                     <path d="M18 14l0 .01" />
                     <path d="M10 14l4 .01" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Crear Prendas</span>
               </RouterLink>
            </li>
         </ul>


         <div>
            <RouterLink v-if="!auth.user" :to="{ name: 'Login' }"
               class="flex w-full px-4 py-2 outline-none border-2 border-slate-500 focus:border-slate-400 text-white font-bold bg-slate-500 rounded-md hover:bg-slate-600">

               <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M21 12h-13l3 -3" />
                  <path d="M11 15l-3 -3" />
               </svg>
               <span class="flex-1 text-start ms-2 font-bold whitespace-nowrap">Iniciar sesion</span>

            </RouterLink>

            <div v-else>

               <div class="flex items-center mb-4 text-white font-semibold ml-2 ">
                  <p>  {{ auth.user.credits }} </p>
                  <CreditsIcon class="w-4 mx-1" />
                  <p>Credito</p>
               </div>


               <button @click="logout"
                  class="flex w-full px-4 py-2 outline-none border-2 border-red-500 focus:border-red-400 text-white font-bold bg-red-500 rounded-md hover:bg-red-600">

                  <template v-if="!auth.logoutLoading">


                     <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 "
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M9 12h12l-3 -3" />
                        <path d="M18 15l3 -3" />
                     </svg>

                     <span class="flex-1 text-start ms-2 font-bold whitespace-nowrap">Cerrar sesión</span>
                  </template>

                  <svg v-else aria-hidden="true" role="status" class="inline w-4 h-4 text-white animate-spin"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB" />
                     <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor" />
                  </svg>



               </button>

            </div>
         </div>
      </div>

   </nav>


</template>
<script setup>
import CreditsIcon from '@/components/icons/CreditsIcon.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const auth = useAuthStore();
const route = useRoute();


const logout = async () => {
   await auth.logout();
}

onMounted(async () => {
   if (!auth.user) {
      await auth.getUser();
   }
})



</script>