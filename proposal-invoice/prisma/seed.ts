import { PrismaClient } from '@prisma/client'
import fs from 'node:fs'
import path from 'node:path'

const prisma = new PrismaClient()

async function main() {
  const storageDir = path.join(process.cwd(), 'storage')
  const uploadsDir = path.join(storageDir, 'uploads')
  if (!fs.existsSync(storageDir)) fs.mkdirSync(storageDir)
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir)

  const seedDir = path.join(process.cwd(), 'seed')
  const logoSrc = path.join(seedDir, 'logo.png')
  const logoDst = path.join(uploadsDir, 'logo.png')
  if (fs.existsSync(logoSrc)) {
    try {
      const txt = fs.readFileSync(logoSrc, 'utf8')
      if (/^[A-Za-z0-9+/=\n\r]+$/.test(txt.trim())) {
        fs.writeFileSync(logoDst, Buffer.from(txt.trim(), 'base64'))
      } else {
        fs.copyFileSync(logoSrc, logoDst)
      }
    } catch {
      fs.copyFileSync(logoSrc, logoDst)
    }
  }

  await prisma.brand.upsert({
    where: { id: 'seed-brand' },
    create: {
      id: 'seed-brand',
      companyName: 'Acme Solutions LLC',
      logoUrl: '/storage/uploads/logo.png',
      colorPrimary: '#2563EB',
      colorSecondary: '#0EA5E9',
      colorAccent: '#F59E0B',
      colorNeutral: '#111827',
      emailFrom: 'acme@yourdomain.com',
      address: '123 Main St, Springfield',
      website: 'https://example.com'
    },
    update: {}
  })

  const existing = await prisma.client.findFirst({ where: { email: 'client@example.com' } })
  if (!existing) {
    await prisma.client.create({ data: { name: 'Jane Client', email: 'client@example.com', company: 'Client Co', phone: '+1 555-0100', address: '456 Market St, Springfield' } })
  }

  const templates = [
    {
      title: 'Plumbing – Water Heater Install',
      category: 'Plumbing',
      cover: 'Professional installation of residential water heaters',
      intro: 'We propose a complete water heater replacement, including removal and disposal of the old unit, new unit installation, and testing.',
      scope: 'Site assessment, shutoff and drain, removal, install new heater, reconnect, test for leaks, haul-away old unit.',
      timeline: '1 day on-site, scheduled within 5 business days of approval.',
      deliverables: 'Operational water heater, warranty documentation, disposal of old unit.',
      terms: '50% deposit to schedule; balance due upon completion. Work performed weekdays 8am–5pm.'
    },
    {
      title: 'Marketing – FB Ads Starter',
      category: 'Marketing',
      cover: 'Kickstart your Facebook Ads with a conversion-focused campaign',
      intro: 'We will research, set up, and launch a Facebook Ads campaign aimed at driving qualified traffic and leads.',
      scope: 'Audience research, ad creative, pixel setup, campaign launch, basic optimization for 2 weeks.',
      timeline: 'Setup in 5-7 days; optimization for 2 weeks post-launch.',
      deliverables: '1-2 campaigns, 2-4 ad sets, creative variations, reporting dashboard.',
      terms: 'Flat fee excludes ad spend. Prepayment required.'
    },
    {
      title: 'Coaching – Strategy Intensive',
      category: 'Coaching',
      cover: 'Deep-dive strategy session to clarify goals and execution plans',
      intro: 'A 3-hour session to align objectives, define KPIs, and outline a 90-day action plan.',
      scope: 'Pre-work questionnaire, 3-hr live session, documented action plan, 2 follow-up check-ins.',
      timeline: 'Intensive scheduled within 2 weeks of booking.',
      deliverables: 'Action plan document, session recording (optional), KPI tracker template.',
      terms: 'Payment due on booking. 48h reschedule policy.'
    }
  ]

  for (const t of templates) {
    const existT = await prisma.template.findFirst({ where: { title: t.title } })
    if (!existT) await prisma.template.create({ data: t })
  }

  console.log('Seed complete')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})