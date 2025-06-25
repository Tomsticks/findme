import { authfunc } from "~/server/services/firebase";
import {query} from '@/server/connections/mysql';
const publicAPIRoutes = ['/api/public', '/api/auth/signin', '/api/auth/signup', '/api/auth/signout', '/api/auth/verify-email', '/api/auth/reset-password', '/api/business/businesscart'];

export default defineEventHandler(async (event) => {
  const url = event.node.req.url || ''
  
  // Skip for public API routes
    if (!url.startsWith('/api')) return
    if (publicAPIRoutes.some(route => url.startsWith(route))) {
        return
    }
    // Check for the auth token in cookies  
 
  try {
      const decoded = await authfunc.UserState()
      setCookie(event, "auth_token", decoded?.refreshToken || '', {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: 'strict',
        })
        if (!decoded) {
            throw new Error('Unauthorized access')

    }
    const user:any = await query('SELECT * FROM users WHERE id = ?', [decoded.uid]);
      event.context.user = user[0] || null; // Set user in context, or null if not found
      
  } catch (err: any) {
    setCookie(event, "auth_token", '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: 'strict',
    })
    return({
      statusCode: 401, statusMessage: ' Unauthorized acess', 
      message: 'You are not authorized to access this resource. Please log in or sign up.'})
  }
})
