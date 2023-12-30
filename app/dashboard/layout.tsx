import Sidebar from '@/components/Dashboard/Sidebar'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pageHeight flex h-full w-full">
      <Sidebar />
      {children}
    </div>
  )
}
