<template>
  <LazyAboutUs v-if="about" />
  <button class="btn btn-danger" v-if="!about" @click="about = true">
    Show content
  </button>
  <hr />
  <!-- <img src="/images/horse.jpeg" alt="horse" width="300" /> -->
  <NuxtImg
    src="/images/horse.jpeg"
    alt="horse"
    width="300"
    format="webp"
    quality="10"
  />
</template>
<script setup>
const about = ref(false);
</script>
