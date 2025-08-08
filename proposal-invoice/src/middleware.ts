import type { NextRequest } from 'next/server'

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

export function middleware(_req: NextRequest) {
  // Placeholder for future auth; currently pass-through
}