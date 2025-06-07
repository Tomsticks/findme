import { authfunc } from "~/server/services/firebase";
import { query } from '~/server/connections/mysql';

export default defineEventHandler(async (event) => {
    // Ensure the user is authenticated
    // const user = await authfunc.UserState();


    const allusers = await query('SELECT * FROM users');
    if (!allusers) {
        throw createError({ statusCode: 404, statusMessage: "No users found" });
    }

    return {
        message: "Users retrieved successfully",
        users: allusers
    };
    
})