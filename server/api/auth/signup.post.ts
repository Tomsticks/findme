// server/api/signup.ts
import { authfunc } from "~/server/services/firebase";
import {query} from '~/server/connections/mysql';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.password || !body.name || !body.username || !body.phone) {
    throw createError({ statusCode: 400, statusMessage: "All fields are Required" });
  }
  try {
    const userCredential = await authfunc.signup(body.email, body.password);
    const user = userCredential.user;
    // console.log(user);
    
      if (user) {
          
      // Optionally, you can store the user in your database
          const data = await query('INSERT INTO users (id, email, name, username, phone) VALUES (?, ?, ?, ?, ?)', [user.uid, user.email, body.name, body.username,body.phone]);
      }
          
      // await authfunc.verifyemail(user?.email);
    return {
      message: "User created successfully",
      uid: user.uid,
        email: user.email,
        name: body.name,
    };
  } catch (error) {
    throw createError({ statusCode: 400, statusMessage: (error as Error).message });
  }
});
