<template>
    <PageLayaout>
        <template v-slot:main>

            <div class="flex flex-col md:flex-row">

                <aside class="flex flex-col mr-2">
                    <UserCard />
                </aside>

                <main class="w-full">

                    <transition enter-active-class="transition ease-out duration-300"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-200"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">

                        <section v-if="show" class="flex justify-center h-screen bg-slate-900 mt-2 ">
                            <div class="flex flex-col items-center  rounded m-2 p-4">
                                <h2
                                    class="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200 mb-16">
                                    Generando diseño
                                </h2>

                                <div class="relative">

                                    <div
                                        class="size-40  md:size-80 rounded-full animate-spin bg-gradient-to-r to-teal-200 from-lime-200">
                                        <div
                                            class="absolute top-1 left-1 right-1 bottom-1 bg-slate-900/80 rounded-full">
                                        </div>
                                    </div>
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <span class="text-white text-sm animate-pulse"> {{ text }}</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </transition>
                </main>
            </div>
        </template>
    </PageLayaout>
</template>
<script setup>
    import PageLayaout from '@/layouts/PageLayaout.vue';
    import UserCard from '@/views/design/UserCard.vue';
    import { ref, onMounted } from 'vue';

    const text = ref('Por favor, espere...');

    const show = ref(false);

    onMounted(async () => {
        show.value = true;
    });
</script>