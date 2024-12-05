<template>
    <div class="rounded-lg shadow-lg overflow-hidden">
        <img @click="() => emits('showImage', image)"
            width="1024"
            height="1024"
            :src="image.images[0].url" 
            :alt="image.description" 
            class="w-full h-69 object-cover"
            loading="lazy" 
        />

        <div class="p-4">
            <p class="leading-relaxed line-clamp-4" :class="textClass">{{ image.prompt }}</p>
        </div>
    </div>
</template>
<script setup>

const emits = defineEmits(['showImage']);

const props = defineProps({
    image: {
        type: Object,
        required: true
    },
    textClass: {
        type: String,
        default: 'text-white'
    }
})
</script>