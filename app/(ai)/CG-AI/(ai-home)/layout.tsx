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
            {path.includes('intro') || path.includes('landing') ? (
              <div className='h-full w-full'>
                <div className="flex h-16 md:h-24 w-full items-center justify-center bg-[#131722CC] border-b-[0.4px] border-b-[#fdfdfd99]">
                  <Image
                    className="h-8 w-48"
                    src="/landing/cryptograd-name.png"
                    alt=""
                    width={800}
                    height={800}
                  />
                </div>
                <div className="flex h-full w-full justify-center items-center p-6 md:p-12">
                  {children}
                </div>
              </div>
            ) : (
              <div className="relative mx-auto flex w-full flex-col">
                <Navbar />
                <div className="pageHeight flex h-full w-full">
                  <AiSidebar />
                  {/* <div>ai-sidebar here</div> */}
                  {children}
                </div>
              </div>
            )}
          </Providers>
        </NoSSrWrapper>
      </body>
    </html>
  )
}
