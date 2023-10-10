import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("voterAuthToken")?.value;
  let auth = null;

  if (authToken) {
    auth = jwt.decode(authToken) as tokenData;
  }

  if (auth) {
    const role = auth.account.role;
    if (role === "user") {
      if (request.nextUrl.pathname === "/")
        return NextResponse.redirect(new URL("/welcome", request.url));
      if (request.nextUrl.pathname.includes("/admin")) {
        return NextResponse.rewrite(new URL(`/not-found`, request.url));
      }
    }
    return;
  }

  return NextResponse.redirect(new URL("/signin", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/welcome", "/admin/:path*", "/"],
};

type tokenData = {
  account: {
    timestamp: string;
    _id: string;
    student_id: string;
    first_name: string;
    last_name: string;
    birth_date: string;
    strand: string;
    block: string;
    grade_lvl: string;
    password: string;
    role?: string;
  };
  iat: number;
  exp: number;
};
