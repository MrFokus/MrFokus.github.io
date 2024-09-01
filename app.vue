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

  <Head>
    <!-- Yandex.Metrika counter -->
    <Script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98214979, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</Script>
    <noscript>
      <div><img src="https://mc.yandex.ru/watch/98214979" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>
