export default defineEventHandler((event) => {
  const authToken = getCookie(event, 'authX');

  if (!authToken || authToken !== 'secretToken') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
    // console.log('Unauthorized access');
  }

  event.context.user = {
    id: 'u78rbwknf',
    name: 'Francis',
  };
});
