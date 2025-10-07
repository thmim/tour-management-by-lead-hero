import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Protected routes that require authentication
  const protectedRoutes = ["/profile", "/add-destination", "/dashboard"];
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

  // Auth routes (login, register)
  const authRoutes = ["/auth/login", "/auth/register"];
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  // Redirect to login if accessing protected route without token
  if (isProtected && !token) {
    const loginUrl = new URL("/auth/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to home if accessing auth routes with token
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/add-destination/:path*",
    "/dashboard/:path*",
    "/auth/login",
    "/auth/register",
  ],
};