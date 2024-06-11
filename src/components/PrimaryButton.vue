<template>
    <button :type="type" :disabled="loading" class="text-slate-800 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center mt-2">

        {{ text }}

        <template v-if="loading">
            <LoadingIcon class="h-4 w-4 ml-2 fill-slate-800"/>
        </template>

    </button>
</template>
<script setup>
import LoadingIcon from '@/components/icons/LoadingIcon.vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'button'
    },
    loading: {
        type: Boolean,
        default: false
    }
});
</script>