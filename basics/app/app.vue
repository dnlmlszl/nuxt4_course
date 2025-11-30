<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Awesome app',
  meta: [{ name: 'Description', content: 'Some more description...' }],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap-grid.min.css',
    },
  ],
});
</script>
