// server/api/login.ts
import { authfunc } from "~/server/services/firebase";
import {query} from '@/server/connections/mysql';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.password) {
    throw createError({ statusCode: 400, statusMessage: "Email and password required" });
  }
  try {
    const userCredential = await authfunc.login(body.email, body.password);
      const user = userCredential.user;
      setCookie(event, "auth_token", user?.refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", 
          sameSite:'strict', 
      });

    const userDetails:any = await query('SELECT * FROM users WHERE id = ?', [user.uid]);
    
      event.context.user = userDetails[0]
    


    return {
      message: "Login successful",
      user: userDetails[0],
      status:'success'
      // ... optionally send idToken or refreshToken here (see below)
    };
  } catch (error) {
    throw createError({ statusCode: 401, statusMessage: (error as Error).message });
  }
});
