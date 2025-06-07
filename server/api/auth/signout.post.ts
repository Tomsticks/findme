import { set } from "mongoose";
import { authfunc } from "~/server/services/firebase";
export default defineEventHandler(async (event) => {
    // Ensure the user is authenticated
    const user = await authfunc.UserState();
    if (!user) {
        throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
    }
    // Sign out the user
    await authfunc.signout(
        user.uid
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
