<script setup lang="ts">
import FillingText from '../features/FillingText.vue';
import SliderGallerySkills from '../features/SliderGallerySkills.vue';
import Thinker from '@/assets/img/thinker.png'
import Nuxt from '@/assets/img/nuxt.svg'
import Ts from '@/assets/img/ts.svg'
import Saas from '@/assets/img/saas.png'
</script>

<template>
    <section class="welcome min-w-[100dvw] gap-16 flex-col py-4">
        <div class="name items-center gap-3 py-1 white-theme">
            <span class="point" />
            <p class=" text-t-m">Герман Глубоков</p>
        </div>
        <SliderGallerySkills class="h-[160px]" :view="3" :skills-list="[Ts, Nuxt, Saas]" />
        <div class="gap-6 flex-col items-center py-8">
            <div class="title flex-col gap-4">
                <FillingText class="white-theme text-h1-m">
                    Я — Герман, и я программист!
                </FillingText>
                <h1 class="white-theme text-h1-m">Программист с двухлетним стажем, создаю эффективные решения
                    и качественные приложения. 
                </h1>
            </div>
            <img class="w-[194px] h-fit aspect-square" :src="Thinker" alt="">
        </div>

    </section>
</template>

<style scoped>
.welcome {
    background: linear-gradient(0deg, #5301DE 0%, #41158C 100%);
}
</style>