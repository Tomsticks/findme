import { query } from '@/server/connections/mysql';
import { set } from "mongoose";
import { authfunc } from "~/server/services/firebase";
export default defineEventHandler(async (event) => {
    const query:any = getQuery(event)
    // Ensure the user is authenticated
    const user:any = await authfunc.UserState();

    // Sign out the user
    await authfunc.signout(
        query.id
    );
    setCookie(event, "auth_token", '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: 'strict',
    });

    event.context.user = null;
    
    return {
        message: "Sign out successful"
    };
}
);
