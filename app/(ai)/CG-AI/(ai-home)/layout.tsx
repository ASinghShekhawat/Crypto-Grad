
import Navbar from '@/components/Navbar/Navbar'
import '../../../globals.scss'
import 'swiper/css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Providers from '../../../providers'
import NoSSrWrapper from '@/components/shared/NoSSrWrapper'
import Script from 'next/script'
import Image from 'next/image'
import Sidebar from '@/components/Dashboard/Sidebar'
import AiSidebar from '@/components/AiDashboard/AiSidebar'
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
  title: 'Cryptograd AI',
  description: 'Cryptograd AI',
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
              {/* <div className="flex h-24 w-full items-center justify-center bg-[#131722CC]">
                <Image
                  className="h-8 w-48"
                  src="/landing/cryptograd-name.png"
                  alt=""
                  width={800}
                  height={800}
                />
              </div> */}
              <Navbar />
              <div className="pageHeight flex h-full w-full">
                <AiSidebar />
                {/* <div>ai-sidebar here</div> */}
                {children}
              </div>
            </div>
          </Providers>
        </NoSSrWrapper>
      </body>
    </html>
  )
}
