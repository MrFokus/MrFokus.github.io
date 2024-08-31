<script setup lang="ts">
import FillingText from '../features/FillingText.vue';
import SliderGallerySkills from '../features/SliderGallerySkills.vue';
import Thinker from '@/assets/img/thinker.png'
import Nuxt from '@/assets/img/nuxt.svg'
import Ts from '@/assets/img/ts.svg'
import Saas from '@/assets/img/saas.png'
import Tailwind from '@/assets/img/tailwind.svg'
import HTML from '@/assets/img/html.png'
</script>

<template>
    <section class="welcome min-w-[100dvw] gap-16 flex-col py-4 lg:p-6 lg:rounded-[20px]">
        <div class="name items-center gap-3 py-1 white-theme">
            <span class="point" />
            <p class=" text-t">Герман Глубоков</p>
        </div>
        <SliderGallerySkills class="h-[160px] sm:h-[200px]" :view="5" :skills-list="[Tailwind,Ts, Nuxt, Saas,HTML]" />
        <div class="gap-6 flex-col items-center py-8 lg:flex-row">
            <div class="title flex-col gap-4">
                <FillingText class="white-theme text-h2">
                    Я — Герман, и я программист!
                </FillingText>
                <h1 class="white-theme text-h1">Программист с двухлетним стажем, создаю эффективные решения
                    и качественные приложения. 
                </h1>
            </div>
            <img class="w-[194px] h-fit aspect-square sm:w-[248px]" :src="Thinker" alt="">
        </div>

    </section>
</template>

<style scoped>
.welcome {
    background: linear-gradient(0deg, #5301DE 0%, #41158C 100%);
}
</style>