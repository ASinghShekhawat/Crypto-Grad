'use client'

import { aiSidebarItems } from '@/types/sidebar'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
export default function AiSidebar() {
  const params = useSearchParams()
  const path = usePathname()
  return (
    <div className="hidden w-[300px] flex-col gap-5 bg-[#131722CC] py-12 mmd:flex">
      {aiSidebarItems.map((item, i) => (
        <>
          {item.seprator && (
            <div className="w-full border-t-2 border-white/20"></div>
          )}
          <Link
            key={item.path + i}
            href={`/CG-AI/${item.path}`}
            className={`relative flex items-center gap-4 pl-6 text-xl after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:rounded ${
              path.includes(item.path)
                ? 'after:bg-themeViolet'
                : 'after:bg-white/5'
            }`}
          >
            {item.icon()}
            {item.title}
          </Link>
        </>
      ))}
    </div>
  )
}
