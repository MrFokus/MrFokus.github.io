<script setup lang="ts">
const itemsRef: Ref<HTMLElement | undefined> = ref()
const containerRef: Ref<HTMLElement | undefined> = ref()
const items: Ref<HTMLElement[] | undefined> = ref()
const props = defineProps<{
    speed?: number
    direction?: 'right' | 'left'
}>()
onMounted(() => {
    if (itemsRef.value) {
        items.value = Array.from(itemsRef.value?.children) as HTMLElement[]
    }
    items.value?.forEach(element => {
        element.style.position = 'absolute'
    });
    setCord()
    if (props.speed) {
        rotate(props.speed)
    }
})

function radianPositionDegree(position: number, N: number, offset: number = 0): number {
    return position * (2 * Math.PI / N) - 0.5 * Math.PI + offset
}

function setPositionElement(degeree: number, element: HTMLElement, container: HTMLElement): void {
    const elRect = element.getBoundingClientRect()
    const width = (container.getBoundingClientRect().width / 2) - element.getBoundingClientRect().width/2
    const height = (container.getBoundingClientRect().height / 2) - element.getBoundingClientRect().height/2
    element.style.top = (height * Math.sin(degeree) - elRect.height / 2) + 'px'
    element.style.left = (width * Math.cos(degeree) - elRect.width / 2) + 'px'
}

function setCord(offset?: number) {
    items.value?.forEach((el, index) => {
        if (containerRef.value) {
            setPositionElement(radianPositionDegree(index, items.value?.length!!, offset), el, containerRef.value)
        }
    })
}
function rotate(speedPercent: number) {
    if (props.direction == 'left')
    speedPercent = -speedPercent
    let offset = 0
    setInterval(() => {
        setCord(offset += speedPercent/1200)
    },20)
}


</script>

<template>
    <div class="rotate-circle relative items-center justify-center aspect-square" ref="containerRef">
        <div class="items-center justify-center">
            <slot name="center">

            </slot>
        </div>
        <div class="absolute w-full h-full items-center justify-center">
            <div class="relative w-[1px] h-[1px]" ref="itemsRef">
                <slot name="items">

                </slot>
            </div>
        </div>

    </div>
</template>


<style scoped></style>