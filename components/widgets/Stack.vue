<script setup lang="ts">
import { stack } from '~/constants/infoAboutMe';


</script>

<template>
    <section class="my-stack gap-8 flex-col">
        <p class="text-h1-m">
            Мой стек
        </p>
        <ul class="flex flex-col gap-4 marker-list ">
            <li class="text-t-m" v-for="s in stack">{{ s }}</li>
        </ul>
    </section>
</template>

<style scoped>

</style>