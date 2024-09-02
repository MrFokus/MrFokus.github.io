<script lang="ts" setup>
import { useThemeStore } from './store/theme';
const html = document.querySelector('html')
const themeStore = useThemeStore()
onMounted(() => {
  themeStore.currentTheme()
})
watch(() => themeStore.isDark, () => {
  if (themeStore.isDark)
    html?.classList.add('dark')
  else
    html?.classList.remove('dark')
})
</script>

<template>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>
