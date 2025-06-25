import { query } from '@/server/connections/mysql';
export default defineEventHandler(async (event) => {
  const user = event.context.user;
  try {
    const business:any = await query('SELECT * FROM business WHERE user_id = ?', [
      user.id,
    ]);
    
    if (!business || business.lenght == 0) {
      return {
       message:'no business '
     }
    }
    return {
      message: 'Business retrieved successfully',
      business: business,
    };
  } catch (error) {
    return {
      message:'something happend'
    }
  }


  

});
