<template>
  <NuxtLayout>
    <h1>Error: {{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </NuxtLayout>
</template>

<script setup>
defineProps(['error']);
</script>
