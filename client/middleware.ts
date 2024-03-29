import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const protectedRoutes = ["/notes"];

// TODO: Write actual logic here 👇
export function middleware(req: NextRequest) {
    const currentUser = req.cookies.get('jwt')?.value;

    if (!currentUser && protectedRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/signin', req.nextUrl.origin));
    }
}