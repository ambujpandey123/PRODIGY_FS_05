import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logged out successfully' });

  // Delete the auth cookie (adjust the cookie name if needed)
  response.cookies.set({
            name:"AuthToken",
            value:" ",
            secure:true,
            httpOnly:true,
            maxAge: 0, // 0 to delete the cookie
            path:"/"
  })
  return response;
}
