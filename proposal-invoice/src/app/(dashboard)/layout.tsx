import Link from 'next/link'
import type { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const nav = [
    { href: '/' as const, label: 'Dashboard' },
    { href: '/new' as const, label: 'New' },
    { href: '/templates' as const, label: 'Templates' },
    { href: '/clients' as const, label: 'Clients' },
    { href: '/proposals' as const, label: 'Proposals' },
    { href: '/invoices' as const, label: 'Invoices' },
    { href: '/settings' as const, label: 'Settings' },
  ]
  return (
    <div>
      <nav className="flex gap-4 mb-6 text-sm">
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className="text-gray-700 hover:text-primary">{n.label}</Link>
        ))}
      </nav>
      {children}
    </div>
  )
}