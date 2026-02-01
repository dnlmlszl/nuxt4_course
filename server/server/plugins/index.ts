export default defineNitroPlugin((nitroApp) => {
  // console.log('Nitro run');

  nitroApp.hooks.hook('request', (event) => {
    console.log('Run on request');
  });
});
