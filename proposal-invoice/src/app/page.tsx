import Link from 'next/link'

export default function DashboardPage() {
  const tiles = [
    { href: '/new' as const, title: 'New Proposal & Invoice', desc: 'Start the wizard' },
    { href: '/templates' as const, title: 'Templates', desc: 'Manage template packs' },
    { href: '/clients' as const, title: 'Clients', desc: 'Manage your clients' },
    { href: '/proposals' as const, title: 'Proposals', desc: 'Browse proposals' },
    { href: '/invoices' as const, title: 'Invoices', desc: 'Browse invoices' },
    { href: '/settings' as const, title: 'Branding Settings', desc: 'Logo & colors' },
  ]
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiles.map((t) => (
          <Link key={t.href} href={t.href} className="rounded-lg border bg-white p-4 shadow-sm hover:shadow">
            <div className="text-lg font-medium">{t.title}</div>
            <div className="text-sm text-gray-600">{t.desc}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}