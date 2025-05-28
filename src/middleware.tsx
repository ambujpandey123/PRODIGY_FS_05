import { NextRequest, NextResponse } from 'next/server';
import { API_URL } from './app/components/validation';
import { jwtVerify } from 'jose';
import axios from 'axios';  

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('AuthToken')?.value;
  
  try {
    if(!token || token === 'undefined') {
      return NextResponse.redirect(new URL('/login?error=not-logged-in', request.url));
    }

    if (token) {
      const verified = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_TOKEN || '')
      );
      const userId = verified.payload.userId;

      const response = await axios.post(`${API_URL}islogin`, {
        userId,
      });

      const data = response.data as { success?: boolean };

      if (data.success) return NextResponse.next();
      return NextResponse.redirect(new URL('/login?error=not-logged-in', request.url));
    }
  } catch (err) {
    console.error("Middleware error:", err);
    return NextResponse.redirect(new URL('/login?error=not-logged-in', request.url));
  }
}

// Protect these routes
export const config = {
  matcher: [
   
    "/",
    
    "/sponcers"
  ],
};
