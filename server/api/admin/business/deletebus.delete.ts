import {query} from '@/server/connections/mysql';
export default defineEventHandler(async (event) => {
    const user = event.context.user;

    if (!user) {
        throw createError({ 
            statusCode: 401,
            statusMessage: 'Unauthorized',
            message: 'You are not authorized to access this resource. Please log in or sign up.',
        });
    }

    const body = await readBody(event);
    const businessId = body.businessId;

    if (!businessId) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'Business ID is required.',
        });
    }

    // Delete the business from the database
    await query('DELETE FROM business WHERE id = ? AND user_id = ?', [businessId, user.uid]);

    return {
        message: 'Business deleted successfully',
    };
}
);