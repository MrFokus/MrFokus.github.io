<script setup>
import { projects } from '~/constants/projects';
import CardProject from '../entities/CardProject.vue';


</script>

<template>
    <section class="projects gap-6 flex-col">
        <p class="text-h1-m">Проекты</p>
        <ul class="grid gap-7 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
            <li class="w-fit" v-for="p in projects">
                <CardProject :card="p"></CardProject>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped></style>