import { query } from '@/server/connections/mysql';
export default defineEventHandler(async (event) => {
    const user = event.context.user;
    const myquery: any = getQuery(event)
    return
    try {
        const business:any = await query('SELECT * FROM business WHERE bus_cart = ?', [
            // cartegory,
        ]);
        
          if (!business || business.length === 0 ) {
            return{
              statusMessage: 'No business found for this CARTEGORY',
            //   message: 'You have not added any business yet.',
            };
        }
        return {
            message: 'Business retrieved successfully',
            business: business,
          }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Something happened',
        });
        
    }


 ;
});
