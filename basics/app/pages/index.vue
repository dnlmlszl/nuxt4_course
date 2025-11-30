<template>
  <h1>Home page</h1>

  <ul v-if="!users.loader.value">
    <li v-for="user in users.names.value" :key="user">
      {{ user }}
    </li>
  </ul>

  <div v-else>Loading...</div>

  <button @click="users.addUser">Add user name</button>
</template>

<script setup>
const users = getUsers('Miles');
</script>
