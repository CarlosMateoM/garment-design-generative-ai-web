<template>
    <PageLayaout>
        <template v-slot:main>

            <div class="flex h-screen">

                <aside class="flex flex-col">
                    <UserCard />
                </aside>

                <main class="w-full">


                    <section class="mt-2 p-4 bg-slate-900 rounded">

                        <div class="mb-4">

                            <RouterLink :to="{ name: 'generations' }"
                                class="text-gray-800 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                Regresar
                            </RouterLink>
                        </div>

                        <div class="w-full flex ">

                            <div class="w-1/2">
                                <img :src="design?.images[0]?.url" alt="">
                            </div>

                            <div class="w-1/2 px-4 ">
                                <h2
                                    class="text-2xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                                    Descripción
                                </h2>
                                <p class="text-white">
                                    {{ design?.prompt }}
                                </p>
                            </div>

                        </div>

                    </section>

                </main>
            </div>
        </template>
    </PageLayaout>
</template>
<script setup>
    import PageLayaout from '@/layouts/PageLayaout.vue';
    import UserCard from '@/views/design/UserCard.vue';
    import { useGarmentDesignStore } from '@/stores/garmentDesign';
    import { storeToRefs } from 'pinia';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const designStore = useGarmentDesignStore();

    const {
        design
    } = storeToRefs(designStore);


    const {
        getDesign,
    } = useGarmentDesignStore();

    onMounted(async () => {
        const id = route.params.id;
        await getDesign(id, 'include=image');
    });

</script>