<template>
  <h1>Users</h1>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.meta);

// if we put definePageMeta into useHead, is a different story

useHead({
  title: route.meta.title as string,
  meta: route.meta.meta as Array<{ name: string; content: string }>,
});

// will not affect on root Meta settings, but can be reached from rout meta like props
definePageMeta({
  title: 'Users',
  meta: [{ name: 'description', content: 'Users description...' }],
});
</script>
