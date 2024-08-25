<script lang="ts" setup>
const html = document.querySelector('html')
const changeDark = ref<boolean>(false)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  changeDark.value = event.matches  
});
onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    changeDark.value = true
  }
})
watch(changeDark, () => {
  if (changeDark.value)
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
