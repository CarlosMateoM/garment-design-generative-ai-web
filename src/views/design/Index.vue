<template>
    <PageLayaout>
        <template v-slot:main>

            <div class="flex h-screen">

                <aside class="flex flex-col">


                    <UserCard />


                    <!--   <section class="flex flex-col h-96 bg-slate-900 p-4 m-2 text-white rounded">

                        <div>

                            <h2
                                class="text-2xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                                Historial</h2>


                     
                            <div class="flex justify-between mb-2" v-if="userGarmentDesigns.total > 0">
                                <button class="bg-slate-700 text-sm p-1 rounded"
                                    @click="changePage(userGarmentDesigns.current_page - 1)"
                                    :disabled="!userGarmentDesigns.prev_page_url">
                                    Anterior
                                </button>
                                <button class="bg-slate-700 text-sm p-1 rounded"
                                    @click="changePage(userGarmentDesigns.current_page + 1)"
                                    :disabled="!userGarmentDesigns.next_page_url">
                                    Siguiente
                                </button>
                            </div>

                        </div>

                        <ul class="flex-grow overflow-y-scroll space-y-4">

                            <li v-for="design in userGarmentDesigns.data" :key="design.id" class="w-48">
                                <img :src="design.url" alt="descripción">
                                <button type="button"
                                    class="text-gray-800 bg-white hover:bg-white/90 font-medium w-full text-sm px-5 py-2">
                                    Ver
                                </button>
                            </li>


                        </ul>

                    </section> -->

                </aside>

                <main class="w-full">

                   <PromptInput 
                        ref="promptInput"
                        @show-prompt-suggestion-card="showPromptSuggestionCard" 
                    />

                    <PromptSuggestionCard 
                        ref="promptSuggestionCard"
                        @show-prompt-suggestion="promptInput.showPromptSuggestion()"
                    />

                </main>
            </div>




        </template>
    </PageLayaout>
</template>
<script setup>
    import PageLayaout from '@/layouts/PageLayaout.vue';
    import UserCard from '@/views/design/UserCard.vue';
    import PromptInput from '@/views/design/PromptInput.vue';
    import PromptSuggestionCard from '@/views/design/PromptSuggestionCard.vue';
    import { useAuthStore } from '@/stores/auth';
    import { useGarmentDesignStore } from '@/stores/garmentDesign';
    import { ref, onMounted } from 'vue';
    import { storeToRefs } from 'pinia';

    const auth = useAuthStore();
    const garmentDesign = useGarmentDesignStore();

    const promptInput = ref(null);
    const promptSuggestionCard = ref(null);

    const {
        getUserGarmentDesigns,
    } = useGarmentDesignStore();

    const {
        userGarmentDesigns,
        userGarmentDesignsLoading
    } = storeToRefs(garmentDesign);

    const changePage = async (page) => {
        await getUserGarmentDesigns(auth.user.id, `page=${page}`);
    }

    const showPromptSuggestionCard = (message) => {
        promptSuggestionCard.value.toggleShow();
        promptSuggestionCard.value.showMessage(message);
    }


    onMounted(async () => {
        await getUserGarmentDesigns(auth.user.id);
    });
</script>