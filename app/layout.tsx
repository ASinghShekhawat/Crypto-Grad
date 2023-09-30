import Navbar from '@/components/Navbar/Navbar'
import './globals.scss'
import 'swiper/css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Providers from './providers'
import NftDroppingNav from '@/components/Navbar/NftDroppingNav'
import Footer from '@/components/Footer/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '1000',
  ],
})

export const metadata: Metadata = {
  title: 'Cryptograd',
  description: 'Cryptograd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={dmSans.className}>
        <Providers>
          <div className="relative mx-auto flex w-full max-w-[1730px] flex-col">
            <NftDroppingNav />
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
