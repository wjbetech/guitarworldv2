// meta
import './globals.css'
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import { createClient } from "next-sanity"
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider"

// component & theme imports
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider"
import Toast from "@/components/Toast/Toast"

// grab Titillium Web font
const titilliumWeb = Titillium_Web({ subsets: ["latin"], weight: ["200", "400", "600", "700", "900"], variable: "--font-titillium" })

// update our page meta
export const metadata: Metadata = {
  title: 'GuitarWorld | @wjbetech',
  description: 'Guitar Store built in Next.js, Sanity.io, Tailwind, Stripe',
}

// sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-03-07',
  useCdn: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={titilliumWeb.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className="font-normal">
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
