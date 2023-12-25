// meta
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import './globals.css'

// component imports
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// grab Titillium Web font
const titilliumWeb = Titillium_Web({ subsets: ["latin"], weight: ["200", "400", "600", "700", "900"], variable: "--font-titillium" })

// update our page meta
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
      <body className={titilliumWeb.className}>
        <main className="font-normal">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
