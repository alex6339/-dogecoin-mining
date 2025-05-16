import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")
  const { pathname } = request.nextUrl

  // 需要认证的路径
  const authRequiredPaths = ["/dashboard"]

  // 认证页面路径
  const authPaths = ["/login", "/register", "/forgot-password"]

  // 如果用户已登录且尝试访问认证页面，重定向到仪表盘
  if (session && authPaths.some((path) => pathname.startsWith(path))) {
    const url = request.nextUrl.clone()
    url.pathname = "/dashboard"
    return NextResponse.redirect(url)
  }

  // 如果用户未登录且尝试访问需要认证的页面，重定向到登录页
  if (!session && authRequiredPaths.some((path) => pathname.startsWith(path))) {
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register", "/forgot-password"],
}
