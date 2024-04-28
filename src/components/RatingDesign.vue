<template>
    <div class="flex justify-between p-4 w-1/2 max-md:w-11/12 mx-auto">
        <label class="flex-1 text-gray-700 font-bold">{{ label }}</label>
        <div class="flex-1 flex justify-around">
            <Emoji1 @click="setSelected(0)" :class="{ 'rounded-full bg-slate-800 text-white' : properties[0].isSelected }"
                classNames="p-1 w-12 h-12 hover:scale-110 transition duration-75" />
            <Emoji2 @click="setSelected(1)" :class="{ 'rounded-full bg-slate-800 text-white': properties[1].isSelected }"
                classNames="p-1 w-12 h-12 hover:scale-110 transition duration-75" />
            <Emoji3 @click="setSelected(2)" :class="{ 'rounded-full bg-slate-800 text-white': properties[2].isSelected }"
                classNames="p-1 w-12 h-12 hover:scale-110 transition duration-75" />
            <Emoji4 @click="setSelected(3)" :class="{ 'rounded-full bg-slate-800 text-white': properties[3].isSelected }"
                classNames="p-1 w-12 h-12 hover:scale-110 transition duration-75" />
            <Emoji5 @click="setSelected(4)" :class="{ 'rounded-full bg-slate-800 text-white': properties[4].isSelected }"
                classNames="p-1 w-12 h-12 hover:scale-110 transition duration-75" />
        </div>
    </div>
</template>
<script setup>
import Emoji1 from '@/components/icons/Emoji1.vue';
import Emoji2 from '@/components/icons/Emoji2.vue';
import Emoji3 from '@/components/icons/Emoji3.vue';
import Emoji4 from '@/components/icons/Emoji4.vue';
import Emoji5 from '@/components/icons/Emoji5.vue';

import { ref } from 'vue';



const emits = defineEmits(['ratingValue']);

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    formName: {
        type: String,
        required: true
    }
});


const properties = ref([
    {
        isSelected: false,
        value: 1
    },
    {
        isSelected: false,
        value: 2
    },
    {
        isSelected: false,
        value: 3
    },
    {
        isSelected: false,
        value: 4
    },
    {
        isSelected: false,
        value: 5
    }
]);

const setSelected = (index) => {
   properties.value.forEach((element, i) => {
        if(i == index) {
            element.isSelected = true;
            emits('ratingValue', props.formName, element.value);
        } else {
            element.isSelected = false;
        }
   });
}


</script>