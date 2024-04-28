<template>
    
    <div class=" flex items-center flex-col flex-1">
        <img 
            width="1024" 
            height="1024"
            :src="img.url" 
            :alt="img.description"  
            class="w-11/12 mb-2 object-contain rounded"
            loading="lazy" 
        />

        <button @click="downloadImage(img.url)"
            class="w-11/12 px-4 py-2 outline-none text-white font-bold bg-slate-800 rounded-md hover:bg-slate-900">
            Descargar
        </button>
    </div>

    <div class="flex-1 ml-4 my-4 h-full overflow-y-auto ">
        <h2 class="text-xl font-semibold text-slate-800 mb-2">Descripción</h2>
        <p class=" text-slate-700 leading-relaxed pr-4">{{ img.prompt }}</p>
    </div>
    
</template>
<script setup>
const props = defineProps({
    img: {
        type: Object,
        required: true
    }
})

const downloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'garment-design.png';
    link.click();
}
</script>