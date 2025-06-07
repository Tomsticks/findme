import {query} from '~/server/connections/mysql';

export default defineEventHandler(async (event) => {
  const user = event.context.user;

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized access',
      message: 'You are not authorized to access this resource. Please log in or sign up.',
    });
    }
    const userData = await query('SELECT * FROM users WHERE id = ?', [user.uid]);

  return {
    message: 'Welcome to the API',
    user: {
      uid: user.uid,
      userd: userData
    },
  };
});