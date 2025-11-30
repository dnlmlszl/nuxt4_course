export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Global middleware');
  console.log(to, from);

  // if (to.path === '/contact') {
  //   return abortNavigation();
  // }

  // if (to.path === '/contact') {
  //   return navigateTo('/');
  // }
});
