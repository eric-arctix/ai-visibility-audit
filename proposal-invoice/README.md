## Proposal & Invoice Generator

Tech stack: Next.js 14 (App Router, TS), TailwindCSS, Prisma + SQLite, OpenAI, Puppeteer, Resend, Zod, React Email.

### Prerequisites
- Node 18+
- npm

### Setup
1. Copy env template:
   ```bash
   cp .env.example .env
   ```
2. Install deps:
   ```bash
   npm install
   ```
3. Generate Prisma client and migrate:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate -- --name init
   ```
4. Seed data:
   ```bash
   npm run seed
   ```
5. Dev server:
   ```bash
   npm run dev
   ```

### Environment Variables
- OPENAI_API_KEY, RESEND_API_KEY, NEXT_PUBLIC_APP_URL, EMAIL_FROM
- DATABASE_PROVIDER (sqlite or postgresql), DATABASE_URL

### Scripts
- dev, build, start, prisma:generate, prisma:migrate, seed

### Endpoints
- POST /api/ai/polish { sectionText, tone }
- POST /api/pdf/proposal JSON -> PDF
- POST /api/pdf/invoice JSON -> PDF
- POST /api/email/send { to, subject, html, attachments[] }

### Storage
Generated PDFs stored under `storage/`. Logo under `storage/uploads/`.

### Upgrade Suggestion
- Integrate Stripe Payment Links and add a webhook endpoint to mark invoices `paid` upon successful payment.