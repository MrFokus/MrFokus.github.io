<script setup lang="ts">

</script>

<template>
    <footer class="w-full flex-col gap-4 p-4 white-theme lg:p-6 lg:rounded-[20px] lg:flex-row lg:items-center lg:justify-between">
        <p class="text-h1">
            Контакты
        </p>
        <ul class=" flex flex-col gap-4 lg:flex-row">
            <li class="flex gap-2 h-fit items-center">
                <img class="lg:h-full aspect-square" src="@/assets/img/email.svg" alt="">
                <a class="text-t" href="mailto:german_glubokov@mail.ru">german_glubokov@mail.ru</a>
            </li>
            <li class="flex gap-2 h-fit items-center">
                <img class="lg:h-full aspect-square" src="@/assets/img/telegram.svg" alt="">
                <a class="text-t" href="https://t.me/mrfokus">t.me/mrfokus</a>
            </li>
            <li class="flex gap-2 h-fit items-center">
                <img class="lg:h-full aspect-square" src="@/assets/img/github.svg" alt="">
                <a class="text-t" href="https://github.com/MrFokus">github.com/MrFokus</a>
            </li>
        </ul>
    </footer>
</template>

<style scoped>
footer {
    background: linear-gradient(0deg, #5301DE 0%, #41158C 100%);
}
</style>