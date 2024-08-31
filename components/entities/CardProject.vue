<script setup lang="ts">
import type { Project } from '~/types/project';
const props = defineProps<{
    card: Project
}>()
</script>

<template>
    <div class="card-project flex flex-col gap-[18px] relative">
        <img class=" project-preview aspect-[16/10] rounded-[20px] object-cover" :src="card.img" :alt="card.name">
        <div class="flex-col gap-3">
            <p class="name text-h1-m">{{ card.name }}</p>
            <div class="flex-wrap gap-y-2 gap-x-4">
                <p v-if="card.description" class="description text-t-m">{{ card.description }}</p>
                <nuxt-link v-if="card.link" class="text-t-m underline cursor-pointer" :to="card.link">Ссылка на
                    сайт</nuxt-link>
                <nuxt-link v-if="card.git" class="text-t-m underline cursor-pointer" :to="card.git">Ссылка на
                    репозиторий</nuxt-link>
            </div>
        </div>
        <div class="absolute gap-2 p-4 right-0 top-0">
            <button v-if="card.isLock" class="indicator">
                <img src="@/assets/img/lock.svg" alt="">
            </button>
            <button v-if="card.inProcess" class="indicator">
                <img src="@/assets/img/clock.svg" alt="">
            </button>
        </div>
    </div>
</template>

<style scoped>
.project-preview {
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.15);
}
</style>