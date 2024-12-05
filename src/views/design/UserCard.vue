<template>
    <section v-if="auth.user" class="bg-slate-900 p-4 m-2 mr-0 mb-0 text-white rounded">

        <div class="flex items-center ">

            <ProfileIcon class="size-5 mr-1 " />

            <span class="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                {{ auth?.user.first_name + " " + auth?.user.last_name }}
            </span>

        </div>

        <p class="text-gray-400 text-sm">
            {{ auth?.user.email }}
        </p>


        <div class="font-semibold">

            <CreditsIcon class="size-5 inline mr-1" />

            <span>
                {{ auth.user.credits }}
            </span>

            <span>
                Créditos
            </span>
        </div>
    </section>
</template>
<script setup>
import CreditsIcon from '@/components/icons/CreditsIcon.vue';
import ProfileIcon from '@/components/icons/ProfileIcon.vue';

import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

</script>