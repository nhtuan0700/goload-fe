import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // const currentUser = request.cookies.get('currentUser')?.value
  // console.log(123)
  // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return Response.redirect(new URL('/dashboard', request.url))
  // }
 
  // if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
  //   return Response.redirect(new URL('/login1', request.url))
  // }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
