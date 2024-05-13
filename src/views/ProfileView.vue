<template>
    <Layout>
        <template #main>
            <div class="m-4 flex flex-col items-center justify-center space-y-4">
                <h1 class="mt-4 text-3xl font-semibold text-slate-800">Perfil</h1>
                <form class="w-full space-y-4">

                    <div class="space-y-1">
                        <label for="first-name" class="text-sm font-medium text-slate-800">Nombres</label>
                        <input type="text" id="first-name" v-model="form.first_name"
                            class="outline-none bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                    </div>

                    <div class="space-y-1">
                        <label for="last-name" class="text-sm font-medium text-slate-800">apellidos</label>
                        <input type="text" id="last-name" v-model="form.last_name"
                            class="outline-none bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                    </div>

                    <div class="space-y-1">
                        <label for="email" class="text-sm font-medium text-slate-800">Correo electrónico</label>
                        <input type="email" id="email" v-model="form.email"
                            class="outline-none bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                    </div>

                    <div class="flex justify-end">
                        <button type="submit"
                            class="hidden mt-8 px-4 py-2 outline-none border-2 border-slate-700 focus:border-slate-600 text-white font-bold bg-slate-700 rounded-md hover:bg-slate-800">
                            Guardar cambios
                        </button>
                    </div>

                </form>
            </div>
        </template>
    </Layout>
</template>
<script setup>
import Layout from '@/layouts/Layout.vue';
import { useAuthStore } from '@/stores/auth';
import { ref, onMounted } from 'vue';

const auth = useAuthStore();

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
});


onMounted(async () => {
    if (!auth.user) { await auth.getUser() }
    form.value = auth.user;
});

</script>
