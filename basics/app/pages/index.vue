<template>
  <h1>Home page</h1>
  <Card />
  <hr />
  <UsersProfile />
  <hr />
  <Profile />
  <Other />
</template>

<script setup>
import Profile from '~/components/users/profile.vue';
//import '~/assets/css/main.css';

// import { UsersProfile } from '@/components/users/profile.vue'; //  <-- by default works without imports as well
// import Other from '@/otherComponents/other.vue';
</script>

<style lang="scss">
/* @import '~/assets/css/main.css'; */
@use '~/assets/css/colors';

h1 {
  color: colors.$gamma;
}
</style>
