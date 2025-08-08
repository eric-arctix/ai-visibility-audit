import '../styles/globals.css'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-neutral-foreground">
        <div className="mx-auto max-w-6xl p-6">{children}</div>
      </body>
    </html>
  )
}