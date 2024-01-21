import ChatSidebar from '@/components/CgAi/Sidebars/ChatSidebar'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ChatSidebar />
      {children}
    </>
  )
}
