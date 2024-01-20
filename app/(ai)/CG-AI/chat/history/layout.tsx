import HistorySidebar from '@/components/CgAi/Sidebars/HistorySidebar'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HistorySidebar />
      {children}
    </>
  )
}
