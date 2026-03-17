import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BOSS Global Academy of Technology',
  description: 'Professional training programs for hospitals, schools, colleges, and corporate organizations',
  metadataBase: new URL('https://www.bossacademy.org'),
  openGraph: {
    title: 'BOSS Global Academy of Technology',
    description:
      'Professional training programs for hospitals, schools, colleges, and corporate organizations',
    url: 'https://www.bossacademy.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
