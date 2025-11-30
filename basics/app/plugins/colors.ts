import MyButton from '~/components/button.vue';

export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp);

  nuxtApp.provide('red', '#ff0000');
  nuxtApp.provide('blue', '#0000ff');

  nuxtApp.provide('alertName', (name: string) => alert(`Hello, ${name}`));

  nuxtApp.vueApp.component('MyButton', MyButton);
});
