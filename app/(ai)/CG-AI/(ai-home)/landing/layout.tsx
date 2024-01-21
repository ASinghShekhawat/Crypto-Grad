import Sidebar from '@/components/Dashboard/Sidebar'
import { ReactNode } from 'react'
import Image from 'next/image'

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pageHeight bg-custom-background flex flex-col gap-12">
      {children}
    </div>
  )
}
