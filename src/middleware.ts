import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authRoutes = ['/login', '/register']

  const checkIsAuthRoute = () => {
    return authRoutes.some((route) => {
      return request.nextUrl.pathname.startsWith(route)
    })
  }

  const currentUser = request.cookies.get('GOLOAD_AUTH')?.value
  if (currentUser && checkIsAuthRoute()) {
    return Response.redirect(new URL('/', request.url))
  }

  if (!currentUser && !checkIsAuthRoute()) {
    return Response.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
