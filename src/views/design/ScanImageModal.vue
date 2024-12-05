<template>
    <VueFinalModal v-model="show" :click-to-close="true" content-transition="vfm-fade" overlay-transition="vfm-fade"
        teleport-to="body" class="flex justify-center items-center bg-black bg-opacity-50"
        content-class="flex flex-col  m-2 p-4 w-2/4 max-w-5xl bg-slate-900 rounded-lg">

        <div class="relative bg-gradient-to-r p-0.5 rounded to-teal-200 from-lime-200 cursor-pointer"
            @click="fileInput.click()"
        >

            <div class="absolute  top-0 bottom-0 right-0 left-0" @dragover.prevent="isDragOver = true"
                @dragleave.prevent="isDragOver = false" @drop.prevent="handleDrop">

            </div>

            <div class="flex flex-col justify-center items-center w-full rounded p-8 bg-slate-900"
                :class="{ 'bg-slate-600': isDragOver }">

                <input type="file" ref="fileInput" class="hidden" @change="handleFileInput"
                    accept="image/png,image/jpeg,image/jpg,image/webp">


                <UploadImageIcon v-if="imageStatus === 'upload'" class="text-gray-400 size-12" />

                <div v-else-if="imageStatus === 'wrong'">
                    <WrongImageIcon class="text-gray-400 size-12 mx-auto mb-4" />
                    <p class="text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                        ¡Solo se aceptan imagenes en los formatos especificados!
                    </p>
                </div>

                <div v-else-if="imageStatus === 'check'">
                    <CheckImageIcon class="text-gray-400 size-12 mx-auto mb-4" />
                    <p class="text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                        {{ selectedImage.name }}
                    </p>
                </div>


                <div v-if="imageStatus === 'check' && describeImageLoading" class="flex flex-col justify-center mt-2">
                    <p class="text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                        Obteniendo descripción...
                    </p>
                    <LoadingIcon class="text-gray-400 size-12 mx-auto my-4" />
                </div>

                <div v-else>
                    <p class="text-gray-400 mt-6">
                        <span class="font-bold text-gray-300"> <span class="underline"> Sube</span> o arrastra </span>
                        la <span
                            class="text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">imagen</span>
                        de una prenda y obtén una descripción detallada.
                    </p>
                    <p class="text-gray-500 text-sm mt-2 text-center">
                        PNG, JPG, JPEG, WEBP (MAX 4MB)
                    </p>
                </div>


            </div>
        </div>

    </VueFinalModal>
</template>
<script setup>
    import UploadImageIcon from '@/components/icons/UploadImageIcon.vue';
    import WrongImageIcon from '@/components/icons/WrongImageIcon.vue';
    import CheckImageIcon from '@/components/icons/CheckImageIcon.vue';
    import LoadingIcon from '@/components/icons/LoadingIcon.vue';
    import { useImageStore } from '@/stores/image';
    import { VueFinalModal } from 'vue-final-modal';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';

    const show = ref(false);

    const isDragOver = ref(false);

    const imageStatus = ref("upload");

    const selectedImage = ref(null);

    const fileInput = ref(null);

    const imageValidTypes = [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/webp'
    ];

    const imageStore = useImageStore();

    const {
        describeImageLoading
    } = storeToRefs(imageStore);

    const {
        createImage,
        describeImage
    } = useImageStore();

    const emits = defineEmits([
        'setPromptSuggestion',
        'showPromptSuggestion',
        'showPromptSuggestionCard',
    ]);

    const validateImage = (file) => {
        return imageValidTypes.includes(file.type);
    }

    const toggleShow = () => {
        show.value = !show.value;
    }

    const handleDrop = async (e) => {

        e.preventDefault();

        isDragOver.value = false;

        const file = e.dataTransfer.files[0];

        if (!validateImage(file)) {
            imageStatus.value = "wrong";
            return;
        }

        selectedImage.value = file;
        imageStatus.value = "check";

        await sendImage();
    }

    const handleFileInput = async (e) => {
        const file = e.target.files[0];
        selectedImage.value = file;
        imageStatus.value = "check";
        await sendImage();
    }

    const sendImage = async () => {

        const form = new FormData();

        form.append('image', selectedImage.value);

        const response = await createImage(form);

        await getImageDescription(response.data.url);

    }

    const getImageDescription = async (url) => {

        try {

            const form = new FormData();

            form.append('url', url);

            const response = await describeImage(form);

            imageStatus.value = "upload";

            show.value = false;

            emits('setPromptSuggestion', response.data.image_description);
            emits('showPromptSuggestion');

        } catch (error) {

            imageStatus.value = "upload";

            show.value = false;

            emits('setPromptSuggestion', error.response.data.alternativeDescription);
            emits('showPromptSuggestionCard', error.response.data.message);
        }


    }




    defineExpose({
        toggleShow,
    });
</script>