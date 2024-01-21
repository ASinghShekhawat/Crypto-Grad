'use client'
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
import { usePathname } from 'next/navigation'
import MainNavbar from '@/components/CgAi/ChatAi/MainNavbar'
import Brand from '@/components/Navbar/Brand'

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

// export const metadata: Metadata = {
//   title: 'Cryptograd AI',
//   description: 'Cryptograd AI',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  console.log(path)
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script src="/scripts/clarity.js" />
      </head>
      <body className={dmSans.className}>
        <NoSSrWrapper>
          <Providers>
            <div className="relative mx-auto flex w-full flex-col">
              {path.includes('intro') || path.includes('landing') ? (
                <div className="flex h-16 w-full items-center justify-center border-b-[0.4px] border-b-[#fdfdfd99] bg-[#131722CC] md:h-24">
                  <Brand />
                </div>
              ) : (
                <MainNavbar />
              )}
              <div className="pageHeight flex h-full w-full">
                {!path.includes('intro') && !path.includes('landing') && (
                  <AiSidebar />
                )}
                {children}
              </div>
            </div>
          </Providers>
        </NoSSrWrapper>
      </body>
    </html>
  )
}
