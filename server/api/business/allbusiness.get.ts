import { query } from '@/server/connections/mysql';
export default defineEventHandler(async (event) => {
  const user = event.context.user;

  const business = await query('SELECT * FROM business');
  if (!business) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No business found',
      message: 'No business yet.',
    });
  }
  return {
    message: 'all business',
    business: business,
  };
});
