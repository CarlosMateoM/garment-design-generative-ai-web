<template>
    <div id="alert-2"
        class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50" role="alert">
        <InfoErrorIcon />
        <span class="sr-only">Info</span>
        <div class="ms-3 text-sm font-medium mr-2">
            {{ error.message }}
        </div>
        <button type="button" @click="() => emits('closeErrorAlert')"
            class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#alert-2" aria-label="Close">
            <span class="sr-only">Close</span>
            <CloseErrorIcon />
        </button>
    </div>
</template>
<script setup>
import InfoErrorIcon from './icons/InfoErrorIcon.vue';
import CloseErrorIcon from './icons/CloseErrorIcon.vue';

const emits = defineEmits(['closeErrorAlert']);

const prosp = defineProps({
    error:{
        type: Object,
        required: true
    }
})

</script>