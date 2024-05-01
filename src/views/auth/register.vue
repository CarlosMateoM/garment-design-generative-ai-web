<template>
    <h1>inicio de sesion</h1>
    <form @prevent.submit="login"  >
        <input v-model="form.username" type="text" >
        <input v-model="form.password" type="text" >
        <input type="submit" >
    </form>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStores';

const auth = useAuthStore();

const form = ref({
    username: '',
    password: ''
});

const login = () => {
    auth.login(form.value);
}
</script>