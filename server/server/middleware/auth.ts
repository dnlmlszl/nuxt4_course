export default defineEventHandler((event) => {
  if (import.meta.prerender) {
    event.context.user = { id: 'system', name: 'Prerender Builder' };
    return;
  }

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
