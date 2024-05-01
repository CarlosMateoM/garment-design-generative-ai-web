<template>
    <section :class="{ 'translate-x-0': criteria, '-translate-x-full': !criteria  }" class="transition-transform duration-300 ease-in-out sticky bottom-0 top-6 px-4 rounded-t-lg text-white bg-slate-800 border " >
        <div class="flex justify-between py-2" >
            <h3 class="font-bold text-2xl" >{{ criteria?.title }}</h3>
            <button @click="() => emits('closeCriteriaInfoModal')" class="px-1 outline-none border-2 border-red-500 focus:border-red-400 text-white text-sm bg-red-500 rounded-md hover:bg-red-600"  >
                cerrar
            </button>
        </div>
        <p class="mb-4 max-w-[980px] "> {{ criteria?.description }} </p>
    </section>
</template>
<script setup>



const emits = defineEmits(['closeCriteriaInfoModal']);

const props = defineProps({
    criteria: {
        type: Object,
        required: false
    }
});



</script>