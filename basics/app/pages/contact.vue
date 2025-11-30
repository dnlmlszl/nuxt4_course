<template>
  <h3>Contact page</h3>

  <p>Random number from utils: {{ randomNumber(5, 200) }}</p>
  <p>Random name from utils: {{ randomName() }}</p>
  <p>Red from plugin: {{ $red }}</p>
  <p>Blue from plugn: {{ $blue }}</p>

  <button @click="$alertName('Alex')">Alert name</button>
  <MyButton>Click me</MyButton>
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

const { $red, $blue } = useNuxtApp();
console.log($red, $blue);
</script>
