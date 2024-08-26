<script setup lang="ts">
import FillingText from '../features/FillingText.vue';
import SliderGallerySkills from '../features/SliderGallerySkills.vue';
import Thinker from '@/assets/img/thinker.png'
</script>

<template>
    <section class="welcome min-w-[100dvw] gap-16 flex-col">
        <div class="name items-center gap-3 py-1">
            <span class="point"/>
            <p class=" text-t-m">Герман Глубоков</p>
        </div>
        <SliderGallerySkills :view="5" :skills-list="[Thinker,Thinker,Thinker,Thinker,Thinker]"/>
        <div class="title">
            <FillingText>
                Я — Герман, и я программист! 
            </FillingText>
        </div>
    </section>
</template>

<style scoped>
.welcome {
    background: linear-gradient(0deg, #5301DE 0%, #41158C 100%);
}

</style>