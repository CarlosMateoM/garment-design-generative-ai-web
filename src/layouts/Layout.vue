<template>
    <div class="flex h-screen">

        <Nabvar />

        <main class="w-full flex flex-col ">
            <MobileNavbar />
          
            <slot name="main" />
        </main>
    </div>

</template>
<script setup>
import Nabvar from '@/components/Navbar.vue';
import MobileNavbar from '@/components/MobileNavbar.vue';
import { onBeforeMount } from 'vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

onBeforeMount(async () => {
  if (!auth.user) {
    await auth.getUser();
  }
});
</script>