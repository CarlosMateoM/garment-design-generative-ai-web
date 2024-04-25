<template>
    <div class="flex h-screen">
        
        <aside class="min-w-64">
            
            <Nabvar />
            
        </aside>
        
        <main class="w-full flex flex-col mx-4">
            <slot name="main" />
        </main>
    </div>

</template>
<script setup>
import Nabvar from '@/components/Navbar.vue';
</script>