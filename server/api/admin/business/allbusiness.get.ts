import { query } from '@/server/connections/mysql';
export default defineEventHandler(async (event) => {
    const user = event.context.user;

    const businesses = await query('SELECT * FROM business ')

    if (!businesses) {
        throw createError({
            statusCode: 404,
            statusMessage: 'No businesses found',
            message: 'There are no businesses available at the moment.',
        });
    }
    return {
        message: 'List of All businesses Businesses retrieved successfully',
        businesses: businesses,
    };
});
