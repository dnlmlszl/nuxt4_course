<template>
  <h1>Employee by ID</h1>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Sorry, try again later</div>
  <div v-else>
    <p><strong>Full name: </strong>{{ data.fullname }}</p>
    <p><strong>Position: </strong>{{ data.position }}</p>
    <p><strong>Age: </strong>{{ data.age }}</p>
  </div>
  <hr />
  <button class="btn btn-primary" @click="editEmployee">Edit employee</button>
  <button class="btn btn-danger mx-2" @click="deleteEmployee">
    Delete employee
  </button>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

// Redirect to edit
function editEmployee() {
  router.push(`/form/edit/${route.params.id}`);
}

// Delete employee
async function deleteEmployee() {
  try {
    await useFetch(`/api/employees/byid`, {
      method: 'DELETE',
      body: { id: route.params.id },
    });
    router.push('/');
  } catch (error) {
    console.log('Error removing employee', error);
  }
}

const { error, pending, data } = await useFetch(
  `/api/employees/byid?id=${route.params.id}`
);
</script>
