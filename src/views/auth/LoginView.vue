<template>
    <div class="flex items-center justify-center h-screen  ">
        <div class="w-full max-w-md">
            <div
                class="flex flex-col items-center justify-center w-full h-full p-10  border  rounded-lg shadow-xl bg-gray-700 border-gray-600">


                    <RouterLink :to="{ name: 'Home' }" class="mb-8 bg-slate-500 hover:bg-slate-600 p-2 rounded-lg w-full text-center  ">
                        <svg class="text-white inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 14l-4 -4l4 -4" />
                            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
                        </svg>
                        <span class="text-white font-semibold"> Regresar </span>
                    </RouterLink>
            <div class="flex items-center mb-8">
                    <img src="/logo.png" alt="Logo" class="w-10" />
               <div>
                  <p class="text-2xl text-white ml-2 font-bold">DESIGN AI</p>
                  <p class="text-xs font-normal ml-2 text-gray-200">Diseño de prendas</p>
               </div>
            </div>


                <div id="alert-2" v-if="auth.loginErrors" :key="error"
                    class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert">
                    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Info</span>
                    <div class="ms-3 text-sm font-medium mr-2">
                        {{ auth.loginErrors.message }}
                    </div>
                    <button type="button" @click="auth.clearLoginErrors"
                        class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                        data-dismiss-target="#alert-2" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>

                <form class="w-full space-y-4" @submit.prevent="login">
                    <div class="space-y-1">
                        <label for="email" class="text-sm font-medium text-gray-200">Correo electrónico</label>
                        <input type="email" id="email" v-model="form.email"
                            class="outline-none bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                    </div>
                    <div class="space-y-1">
                        <label for="password" class="text-sm font-medium text-gray-200">Contraseña</label>
                        <input type="password" id="password" v-model="form.password"
                            class="outline-none bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                    </div>
                    <button v-if="!auth.loginLoading" type="submit"
                    class="mb-8 bg-slate-500 hover:bg-slate-600 p-2 rounded-lg w-full text-center text-white font-bold "
                        >
                        Iniciar sesión
                    </button>
                    <button v-else type="submit"
                    class="mb-8 bg-slate-500 hover:bg-slate-600 p-2 rounded-lg w-full text-center  "
                        >
                        <svg aria-hidden="true" role="status" class="inline w-4 h-4 text-white animate-spin"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor" />
                        </svg>
                    </button>
                </form>

                <div class="hidden space-y-2 mt-4">
                    <a href="#" class="text-sm text-gray-200 hover:text-gray-100">¿Olvidaste tu contraseña?</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

const form = {
    email: '',
    password: ''
};

const login = async () => {
    await auth.login(form)
}

</script>