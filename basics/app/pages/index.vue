<template>
  <h1>Home page</h1>
  <NuxtLink to="https://google.com" target="_blank">Go to Google</NuxtLink>
  <hr />
  <button @click="router.push('/contact')">Go to Contact</button>
</template>

<script setup>
const router = useRouter();
</script>
