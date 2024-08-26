<script setup lang="ts">
import Welcome from '~/components/widgets/Welcome.vue';


</script>

<template>
    <main>
        <Welcome/>
    </main>
</template>

<style scoped>
main {
    flex-direction: column;
    gap: 32px;
}

main>* {
    padding-left: 16px;
    padding-right: 16px;

}
</style>