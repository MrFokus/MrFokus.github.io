<script setup lang="ts">

const props = defineProps<{
    skillsList: string[],
    view: number
}>()

function getHeight(currentIndex: number,length:number, lowerBound?:number) {
    const height = (-Math.abs(currentIndex - Math.floor(length/2)) + length)*100/length
    return lowerBound && height <= lowerBound? lowerBound: height
}
</script>

<template>
    <ul class="flex slider-gallery-skills gap-8 items-end">
        <li v-for="(skill,index) in skillsList" :style="{height: getHeight(index, skillsList.length)+'%'}" :key="index" class="card-skill">
            <img :src="skill" alt="">
        </li>
    </ul>
</template>

<style scoped>

</style>