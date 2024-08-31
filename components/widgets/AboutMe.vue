<script setup lang="ts">
import { myLife } from '~/constants/infoAboutMe';


</script>

<template>
    <section class="about-me flex-col gap-8">
        <div class="flex-col gap-4 lg:flex-row lg:justify-between">
            <p class="text-h1">
                Немного обо мне
            </p>
            <h2 class="text-h2 lg:w-[50%]">
                Мои цели — создавать универсальный софт, который удобен и прост в использовании
            </h2>
        </div>
        <div class="flex-col gap-4 lg:lg:flex-row lg:justify-between">
            <ul class="flex flex-col gap-4 marker-list ">
                <li class="text-t" v-for="el in myLife">{{el}}</li>
            </ul>
            <img class=" lg:w-[50%]" src="@/assets/img/hi.png" alt="">
        </div>
    </section>
</template>

<style scoped>

</style>