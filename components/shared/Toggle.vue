<script setup lang="ts">
const emit = defineEmits<{
    'click': [boolean]
}>()
const isOpen = ref<boolean>(false)
const value = defineModel<boolean>()
watch(value, () => {
    if (value.value)
        isOpen.value = value.value
}, { immediate: true })
function click() {
    value.value = !isOpen.value
    isOpen.value = !isOpen.value
    emit('click', isOpen.value)
}
</script>

<template>
    <button @click.stop="click"
        :class="['bg-background', 'w-12', 'h-7', 'rounded-2xl', 'p-0.5', 'flex', isOpen ? 'active' : '']">
        <div class="circle-container relative w-full h-full justify-end">
            <div class="circle bg-text-primary h-full aspect-square rounded-[100%] justify-center items-center">
                <slot>

                </slot>
            </div>
        </div>
    </button>
</template>


<style scoped>
button .circle-container {
    flex: 0;
    transition: all 0.3s;
}

button.active .circle-container {
    flex: 1;
}
</style>