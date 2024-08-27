<script setup lang="ts">
import AboutMe from '~/components/widgets/AboutMe.vue';
import Stack from '~/components/widgets/Stack.vue';
import Welcome from '~/components/widgets/Welcome.vue';


</script>

<template>
    <main>
        <Welcome/>
        <AboutMe/>
        <Stack/>
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