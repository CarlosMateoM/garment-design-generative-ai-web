<template>
    <div class="flex bg-slate-800 border-4 border-slate-900 p-4 m-2 text-sm rounded text-white font-sans">

        <textarea v-model="textareaContent"
            class="bg-slate-800 resize-none rounded w-full text-lg  outline-none transition-colors duration-500"
            placeholder="Describe el estilo, color y detalles de tu prenda..." rows="6" />

        <div class="w-32 ml-3 flex justify-between flex-col">

            <transition enter-active-class="transition ease-out duration-300"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-200" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <PrimaryButton v-if="showButton" class="w-32" @click="createDesign" text="Generar"
                    :loading="createGarmentDesignLoading">
                    <SparklesIcon class="inline size-5" />
                </PrimaryButton>
            </transition>

            <div class="flex justify-end">
                <button @click="scanImageModalRef.toggleShow()">
                    <ScanImageIcon class="text-gray-400 hover:text-gray-200" />
                </button>
            </div>
        </div>
    </div>

    <BadRequestModal 
        ref="badRequestModalRef" 
    />

    <ScanImageModal 
        ref="scanImageModalRef" 
        @set-prompt-suggestion="setPromptSuggestion"
        @show-prompt-suggestion="showPromptSuggestion"
        @show-prompt-suggestion-card="(msg) => emits('showPromptSuggestionCard', msg)"
    />

</template>
<script setup>
    import PrimaryButton from '@/components/PrimaryButton.vue';
    import SparklesIcon from '@/components/icons/SparklesIcon.vue';
    import ScanImageModal from '@/views/design/ScanImageModal.vue';
    import ScanImageIcon from '@/components/icons/ScanImageIcon.vue';
    import { useGarmentDesignStore } from '@/stores/garmentDesign';
    import BadRequestModal from '@/views/design/BadRequestModal.vue';
    import { storeToRefs } from 'pinia';
    import { ref, computed } from 'vue';
    import router from '@/router';

    const garmentDesign = useGarmentDesignStore();

    const textareaContent = ref('')

    const promptSuggestion = ref('');
    const badRequestModalRef = ref(null);
    const scanImageModalRef = ref(null);

    const emits = defineEmits(['showPromptSuggestionCard']);

    const showButton = computed(() => textareaContent.value.trim() !== '')

    const {
        createGarmentDesign
    } = useGarmentDesignStore();

    const {
        createGarmentDesignLoading
    } = storeToRefs(garmentDesign);

    const setPromptSuggestion = (msg) => {
        promptSuggestion.value = msg;
    }

    const showPromptSuggestion = () => {

        textareaContent.value = '';

        const promptArray = Array.from(promptSuggestion.value);

        promptArray.forEach((char, index) => {
            setTimeout(() => {
                textareaContent.value += char;
            }, 20 * index);
        });

    }

    const createDesign = async () => {

        try {

            const description = textareaContent.value;

            await createGarmentDesign({ prompt: description });

            router.push({ name: 'design.processing' });

        } catch (error) {

            const status = error.response.status;

            if (status === 400) {
                badRequestModalRef.value.toggleModal();
            } else if (status === 403) {
                alert('No tienes suficientes créditos');
            } else if (status === 422) {
                promptSuggestion.value = error.response.data.alternativeDescription;
                emits('showPromptSuggestionCard', error.response.data.message);
            }

        }

    }

    defineExpose({
        setPromptSuggestion,
        showPromptSuggestion
    });
</script>