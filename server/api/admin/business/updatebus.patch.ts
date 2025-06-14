// import { query } from '@/server/connections/mysql';
// export default defineEventHandler(async (event) => {
//     const user = event.context.user;
//     const info = getQuery(event);
// // Ensure the user is authenticated
//     if (!user) {
//         throw createError({
//             statusCode: 401,
//             statusMessage: 'Unauthorized access',
//             message: 'You are not authorized to access this resource. Please log in or sign up.',
//         });
//     }

    
//     const body = await readBody(event);
//     interface businessInfo {    
//         businessName: string;
//         businessDescription: string; 
//         businessAddress: string;
//         businessPhone: string;
//         businessEmail: string;
//         businessCategory: string;
//         businessImages: string;
//         user_id: string;
//     }

//     try {
//         await query('UPDATE business SET bus_name = ?, bus_desc = ?, bus_location = ?, bus_phone = ?, bus_email = ?, bus_cart = ? WHERE id = ? AND user_id = ?', [
    
// )

//         return {
//             message: 'Business updated successfully',
//         };
//     } catch (error) {
//         console.error('Error updating business:', error);
//         throw createError({
//             statusCode: 500,
//             statusMessage: 'Internal Server Error',
//             message: 'An error occurred while updating the business. Please try again later.',
//         });
//     }
// }
// );
