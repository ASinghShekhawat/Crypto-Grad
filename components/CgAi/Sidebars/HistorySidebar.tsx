import Button from '@/components/shared/Button'
import Link from 'next/link'
import { IoMdAdd } from 'react-icons/io'

const TIMELINE = [
  {
    title: 'Today',
    path: 'today',
  },
  {
    title: 'Yesterday',
    path: 'yesterday',
  },
  {
    title: 'This Week',
    path: 'week',
  },
  {
    title: 'This Month',
    path: 'month',
  },
  {
    title: 'Last 3 Months',
    path: 'quater',
  },
  {
    title: 'Last 6 Months',
    path: 'half-year',
  },
  {
    title: 'This Year',
    path: 'year',
  },
]

export default function HistorySidebar() {
  return (
    <div className="fixedHeight hidden min-h-full w-[300px] flex-col gap-4 bg-[#131722CC] mmd:flex">
      <div className="mt-4 flex flex-col gap-4">
        <Button className="mx-4 w-fit !rounded-full">
          <IoMdAdd className="text-3xl" /> New Chat
        </Button>
      </div>
      <div className="flex flex-col">
        {TIMELINE.map((item) => (
          <Link
            key={item.title}
            href={`/CG-AI/chat/history/${item.path}`}
            className="px-4 py-2 odd:bg-themeAiChatSidebarBgDark even:bg-themeAiChatSidebarBgLight"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
