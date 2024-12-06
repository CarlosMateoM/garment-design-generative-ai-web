<template>
   <RouterView />
</template>

<script setup>
   import { RouterView } from 'vue-router';
   import { useAuthStore } from '@/stores/auth';
   import { onMounted, onUnmounted } from 'vue';
   import echo from '@/echo';
   import router from '@/router';

   const auth = useAuthStore();

   onMounted(async () => {
      await auth.getUser();
      echo.private(`image-processed.${auth.user.id}`)
         .listen('ImageProcessedEvent', async (e) => {
            router.push({ name: 'design.show', params: { id: e.garmentDesign.id } });
         });

     
   });

   onUnmounted(() => {
      echo.leaveChannel('image-processed');
   });
</script>
