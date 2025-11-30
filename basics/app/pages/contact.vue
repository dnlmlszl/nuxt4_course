<template>
  <h3>Contact page</h3>
</template>

<script setup>
definePageMeta({
  middleware: [
    'name',
    function (to, from) {
      console.log('Local middleware');
    },
  ],
});
</script>
