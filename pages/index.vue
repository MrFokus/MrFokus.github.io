<script setup lang="ts">
import AboutMe from '~/components/widgets/AboutMe.vue';
import Contacts from '~/components/widgets/Contacts.vue';
import Projects from '~/components/widgets/Projects.vue';
import Stack from '~/components/widgets/Stack.vue';
import Welcome from '~/components/widgets/Welcome.vue';


</script>

<template>
    <main class="m-auto gap-8 max-w-[1440px] lg:py-12 lg:px-[50px] lg:gap-20">
        <Welcome class="xl:min-w-fit"/>
        <AboutMe class="xl:min-w-fit"/>
        <Stack class="xl:min-w-fit"/>
        <Projects class="xl:min-w-fit"/>
        <Contacts class="xl:min-w-fit"/>
    </main>
</template>

<style scoped>

@tailwind utilities;
main {
    flex-direction: column;
}
main>* {
        padding-left: 16px;
        padding-right: 16px;
    
    }
@media screen(lg) {
    main>* {
        padding-left: unset;
        padding-right: unset;
    
    }
}
</style>