<template>
    <transition enter-active-class="transition ease-out duration-300" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-200"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">

        <section v-if="show" class="bg-slate-900 p-4 m-2 text-white rounded">
            <h2
                class="text-4xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                ¡Tu creatividad no tiene límites!
            </h2>
            <p class="mb-4">
                {{ message }}
            </p>

            <p class="mb-4">
                ¿Te interesa ver nuestra propuesta?
            </p>
            <div class="flex justify-between">

                <PrimaryButton @click="showPromptSuggestion" text="Ver Propuesta" />


                <button @click="toggleShow"
                    class="text-gray-800 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                    No, gracias. Ajustaré mi descripción!
                </button>

            </div>
        </section>
    </transition>
</template>
<script setup>
    import PrimaryButton from '@/components/PrimaryButton.vue';
    import { ref } from 'vue';

    const show = ref(false);

    const message = ref('');

    const emits = defineEmits(['showPromptSuggestion']);

    const showPromptSuggestion = () => {
        emits('showPromptSuggestion');
        toggleShow();
    }

    const showMessage = (msg) => {

        message.value = '';

        const promptArray = Array.from(msg);

        promptArray.forEach((char, index) => {
            setTimeout(() => {
                message.value += char;
            }, 10 * index);
        });

    }

    const toggleShow = () => {
        show.value = !show.value;
    }

    defineExpose({
        toggleShow,
        showMessage
    });

</script>