import * as React from 'react'
import { Html, Heading, Text, Button, Section, Tailwind } from '@react-email/components'

export function ProposalEmail({ company, recipient, proposalUrl, invoiceUrl }: { company: string; recipient: string; proposalUrl: string; invoiceUrl: string }) {
  return (
    <Html>
      <Tailwind>
        <Section className="bg-white p-6">
          <Heading as="h2">{company} sent you documents</Heading>
          <Text>Hi {recipient},</Text>
          <Text>Your proposal and invoice are ready.</Text>
          <div className="flex gap-4">
            <Button className="bg-blue-600 text-white px-4 py-2 rounded" href={proposalUrl}>View Proposal</Button>
            <Button className="bg-amber-500 text-black px-4 py-2 rounded" href={invoiceUrl}>View Invoice</Button>
          </div>
          <Text className="text-gray-500 mt-4">If you have questions, reply to this email.</Text>
        </Section>
      </Tailwind>
    </Html>
  )
}