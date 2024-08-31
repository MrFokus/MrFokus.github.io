<script setup lang="ts">

</script>

<template>
    <footer class="w-full flex-col gap-4 p-4 white-theme">
        <p class="text-h1-m">
            Контакты
        </p>
        <ul class=" flex flex-col gap-4">
            <li class="flex gap-2">
                <img src="@/assets/img/email.svg" alt="">
                <a href="mailto:german_glubokov@mail.ru">german_glubokov@mail.ru</a>
            </li>
            <li class="flex gap-2">
                <img src="@/assets/img/telegram.svg" alt="">
                <a href="https://t.me/mrfokus">t.me/mrfokus</a>
            </li>
            <li class="flex gap-2">
                <img src="@/assets/img/github.svg" alt="">
                <a href="https://github.com/MrFokus">github.com/MrFokus</a>
            </li>
        </ul>
    </footer>
</template>

<style scoped>
footer {
    background: linear-gradient(0deg, #5301DE 0%, #41158C 100%);
}
</style>