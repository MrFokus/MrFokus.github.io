<script setup lang="ts">
const refParagraph = ref()
const fullText = ref<string>()
//     defineOptions({
//   inheritAttrs: false
// })
onMounted(() => {
    fullText.value = refParagraph.value.textContent
    fillingText()
})
function fillingText() {
    let count = 0
    setInterval(() => {
        if (refParagraph.value) {
            refParagraph.value.innerText = fullText.value?.slice(0, count)
            count++
            if (count == fullText.value?.length) {
                count = 0
            }
        }
    },200)
}
</script>

<template>
    <p class="filling-text">
        <span v-bind="$attrs" ref="refParagraph">
            <slot></slot>
        </span>
        <span v-bind="$attrs" class="carriage">|</span>
    </p>
    
</template>

<style scoped>
.carriage{
    animation: visible 1s infinite;
}
@keyframes visible{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    
}
</style>