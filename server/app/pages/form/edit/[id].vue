<template>
  <h1>Edit employee</h1>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error: Sorry, something happened...</div>
  <div v-else>
    <form @submit.prevent="submitForm" class="mt-4">
      <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input
          v-model="formData.fullname"
          type="text"
          class="form-control"
          id="fullname"
          required
        />
      </div>
      <div class="mb-3">
        <label for="position" class="form-label">Position</label>
        <input
          v-model="formData.position"
          type="text"
          class="form-control"
          id="position"
          required
        />
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input
          v-model="formData.age"
          type="number"
          class="form-control"
          id="age"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Edit Employee</button>
    </form>
  </div>
</template>

<script setup>
import { useFetch } from 'nuxt/app';
import { watchEffect } from 'vue';
import { ref } from 'vue';
const route = useRoute();

const formData = ref({
  fullname: '',
  position: '',
  age: null,
});

// GET EMPLOYEE BY ID
const { error, pending, data } = await useFetch(
  `/api/employees/byid?id=${route.params.id}`
);

// console.log(data.value);
watchEffect(() => {
  let form = formData.value;
  if (data) {
    form.fullname = data.value.fullname;
    form.position = data.value.position;
    form.age = data.value.age;
  }
});

async function submitForm() {
  try {
    const request = await $fetch('/api/employees', {
      method: 'post',
      body: formData.value,
    });
  } catch (error) {
    console.log(error);
  }
}
</script>
