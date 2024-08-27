<script setup lang="ts">
import { myLife } from '~/constants/infoAboutMe';


</script>

<template>
    <section class="about-me flex-col gap-8">
        <div class="flex-col gap-4">
            <p class="text-h1-m">
                Немного обо мне
            </p>
            <h2 class="text-h1-m">
                Мои цели — создавать универсальный софт, который удобен и прост в использовании
            </h2>
        </div>
        <ul class="flex flex-col gap-4 marker-list ">
            <li class="text-t-m" v-for="el in myLife">{{el}}</li>
        </ul>
        <img src="@/assets/img/hi.png" alt="">
    </section>
</template>

<style scoped>

</style>