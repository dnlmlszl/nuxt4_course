<template>
  <h1>{{ title }} page</h1>
  <button @click="setPageLayout('default')">Change layout</button>
</template>

<script setup>
const title = ref('Contact');

// setTimeout(() => {
//   title.value = 'New Contact';
// }, 2000);

// useHead({
//   // title: 'Contact',
//   titleTemplate: title,
// });

useSeoMeta({
  title: 'Awesome app..',
  ogTitle: 'Awesome app...',
  description: 'Some description..',
  ogDescription: 'Some description...',
});

definePageMeta({
  layout: 'secondary',
});
</script>
