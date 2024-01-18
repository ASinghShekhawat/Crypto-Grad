import Navbar from '@/components/Navbar/Navbar'
import './globals.scss'
import 'swiper/css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Providers from './providers'
import NftDroppingNav from '@/components/Navbar/NftDroppingNav'
import Footer from '@/components/Footer/Footer'
import NoSSrWrapper from '@/components/shared/NoSSrWrapper'
import Script from 'next/script'

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
        <Script src="/scripts/clarity.js" />
        <Script src="/scripts/klaviyo.js" />
      </head>
      <body className={dmSans.className}>
        <NoSSrWrapper>
          <Providers>
            <div className="relative mx-auto flex w-full flex-col">
              <NftDroppingNav />
              <Navbar />
              {children}
              <Footer />
            </div>
          </Providers>
        </NoSSrWrapper>
      </body>
    </html>
  )
}
