export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Secondary middleware');
});
