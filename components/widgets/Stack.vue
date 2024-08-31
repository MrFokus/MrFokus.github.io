<script setup lang="ts">
import { stack } from '~/constants/infoAboutMe';
import RotateCircle from '../features/RotateCircle.vue';


</script>

<template>
    <section class="my-stack gap-8 flex-col lg:flex-row lg:justify-between lg:items-center">
        <div class="flex-col gap-8 lg:gap-11 lg:w-[50%]">
            <p class="text-h1">
                Мой стек
            </p>
            <ul class="flex flex-col gap-4 marker-list ">
                <li class="text-t" v-for="s in stack">{{ s }}</li>
            </ul>
        </div>
        <RotateCircle class="lg:w-[45%] h-fit" direction="left" :speed="10">
            <template v-slot:center>
                <div class="card-skill">
                    <img src="@/assets/img/nuxt.svg" alt="">
                </div>
            </template>
            <template v-slot:items>
                <div class="card-skill">
                    <img src="@/assets/img/html.png" alt="">
                </div>
                <div class="card-skill">
                    <img src="@/assets/img/js.svg" alt="">
                </div>
                <div class="card-skill">
                    <img src="@/assets/img/tailwind.svg" alt="">
                </div>
                <div class="card-skill">
                    <img src="@/assets/img/nest.png" alt="">
                </div>
                <div class="card-skill">
                    <img src="@/assets/img/ts.svg" alt="">
                </div>
                <div class="card-skill">
                    <img src="@/assets/img/saas.png" alt="">
                </div>
                <div class="card-skill">
                    <img src="@/assets/img/postgre.svg" alt="">
                </div>
            </template>
        </RotateCircle>
    </section>
</template>

<style scoped>
.card-skill{
    width: 80px;
    height: 80px;
}
@media screen(lg) {
    .card-skill{
    width: 120px;
    height: 120px;
}
}
</style>