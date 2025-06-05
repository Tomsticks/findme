import {uploadImagesToCloudinary} from '@/server/services/cloudinary'
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body || !body.images || !Array.isArray(body.images)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid request body. Expected an array of images.',
        });
    }

    try {
        // Convert base64 images to Cloudinary URLs
        const imageUrls = await uploadImagesToCloudinary(body.images, 'businesses');
        
        // Return the uploaded image URLs
        return {
            message: 'Images uploaded successfully',
            imageUrls,
        };
    } catch (error) {
        console.error('Error uploading images:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to upload images',
        });
    }
    


}
);