import { uploadImagesToCloudinary } from '@/server/services/cloudinary'
import { query } from '@/server/connections/mysql'
import { v4 as uuidv4 } from 'uuid';
export default defineEventHandler(async (event) => {
    const user = event.context.user;
    
    // Ensure the user is authenticated
    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized access',
            message: 'You are not authorized to access this resource. Please log in or sign up.',
        });
    }
    
    const body = await readBody(event);
    interface businnesInfo{
        businessName: string;
        businessDescription: string; 
        businessAddress: string;
        businessPhone: string;
        businessEmail: string;
        businessCategory: string;
        businessImages: string;
        user_id: string;
    }


    // Ensure the request body contains the required fields
    // if (!body || !body.businessName || !body.businessDescription || !body.businessAddress || !body.businessPhone || !body.businessEmail || !body.businessWebsite || !body.businessCategory) {
    //     throw createError({
    //         statusCode: 400,
    //         statusMessage: 'Invalid request body. Required fields are missing.',
    //     });
    // }

    try {
        
        if (body) {
            // const imageUrls = await uploadImagesToCloudinary(body.images, 'businesses');
            // Save the business information to the database
            const businessInfo: businnesInfo = {
                businessName: body.businessName || '',
                businessDescription: body.businessDescription || '',
                businessAddress: body.businessAddress || '',
                businessPhone: body.businessPhone || '',
                businessEmail: body.businessEmail || '',
                businessCategory: body.businessCategory || '',
                businessImages: body.businessImage, // Store the image URLs as a JSON string
                user_id: user?.id

            };
            const result:any = await query('INSERT INTO business (bus_id, bus_name, bus_img, bus_desc, bus_location, bus_phone, bus_email, bus_cart, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [
                uuidv4(), // Generate a unique ID for the business
                businessInfo.businessName,
                businessInfo.businessImages,
                businessInfo.businessDescription,
                businessInfo.businessAddress,
                businessInfo.businessPhone,
                businessInfo.businessEmail,
                businessInfo.businessCategory,
                businessInfo.user_id 
            ]);
            return {
                message: 'Business added successfully',
                businessId: result?.insertId, // Return the ID of the newly created business
                businessInfo: businessInfo ,
                user:user
            };
            
        }
     
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to upload images',
        });
    }
    


}
);