import { ref } from 'vue';

export const getUsers = (args) => {
  const loader = ref(false);
  const names = ref(['Francis', 'James', 'Doe']);

  const addUser = () => {
    loader.value = true;

    setTimeout(() => {
      names.value.push(args);
      loader.value = false;
    }, 2000);
  };
  return { loader, names, addUser };
};
