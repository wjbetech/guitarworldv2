import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import './globals.css'

const titilliumWeb = Titillium_Web({ subsets: ["latin"], weight: ["200", "400", "600", "700", "900"], variable: "--titillium" })

export const metadata: Metadata = {
  title: 'GuitarWorld | @wjbetech',
  description: 'Guitar Store built in Next.js, Sanity.io, Tailwind, Stripe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={titilliumWeb.className}>{children}</body>
    </html>
  )
}
