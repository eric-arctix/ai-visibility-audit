import { Resend } from 'resend'

export type EmailAttachment = {
  filename: string
  content: string | Buffer // base64 string or raw Buffer
  contentType?: string
}

export async function sendEmail({ to, subject, html, attachments }: { to: string; subject: string; html: string; attachments?: EmailAttachment[] }) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY not set')
  const resend = new Resend(apiKey)

  const files = attachments?.map((a) => ({
    filename: a.filename,
    content: typeof a.content === 'string' ? Buffer.from(a.content, 'base64') : a.content,
    contentType: a.contentType,
  }))
  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM ?? 'no-reply@yourdomain.com',
    to,
    subject,
    html,
    attachments: files,
  })
  if (error) throw error
}