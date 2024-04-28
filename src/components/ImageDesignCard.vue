<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img @click="() => emits('showImage', image)"
            width="1024"
            height="1024"
            :src="image.url" 
            :alt="image.description" 
            class="w-full h-48 object-cover"
            loading="lazy" 
        />

        <div class="p-4">
            <h2 class="text-gray-800 text-xl font-semibold  mb-2">{{ image.title }}</h2>
            <p class="text-gray-700 leading-relaxed line-clamp-4">{{ image.prompt }}</p>
        </div>
    </div>
</template>
<script setup>

const emits = defineEmits(['showImage']);

const props = defineProps({
    image: {
        type: Object,
        required: true
    }
})
</script>