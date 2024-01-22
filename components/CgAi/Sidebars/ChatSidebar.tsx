'use client'

import Button from '@/components/shared/Button'
import { IChat } from '@/context/HistoryContext'
import useChat from '@/hooks/useChat'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'

export default function ChatSidebar() {
  const [weekChat, setWeekChat] = useState<IChat[]>([])
  const [monthChat, setMonthChat] = useState([
    {
      id: 'jafo8j49pfhao87w4fh78hfaw78fboa7w4bf',
      title: 'Trading Candlesticks',
      chatType: 'trade-analyser',
    },
    {
      id: 'aoifjejfoase83hf938h9h9aw78fboa7w4bf',
      title: 'Trade Analysis',
      chatType: 'trade-analyser',
    },
    {
      id: 'aoifyhjfoase83hf938h9h9aw78fboa7w4bf',
      title: 'How to get into hyped',
      chatType: 'crypto-buzz',
    },
    {
      id: 'aoisswqqfjejfoase83hf938h9h9aw78fboa7w4bf',
      title: 'Trade Analysis',
      chatType: 'trade-analyser',
    },
    {
      id: 'aoifqwyhjfoase83hf938h9h9aw78fboa7w4bf',
      title: 'How to get into hyped',
      chatType: 'crypto-buzz',
    },
  ])

  const params: {
    chatType:
      | 'chat-genius'
      | 'trade-analyser'
      | 'contract-insight'
      | 'crypto-buzz'
  } = useParams()
  const { allChat } = useChat()
  const router = useRouter()

  // const spreadChat = useCallback(() => {
  //   allChat.forEach(fai)
  // },[allChat])

  // useEffect(() => {
  //   spreadChat()
  // },[spreadChat])

  useEffect(() => {
    setWeekChat([...allChat])
  }, [allChat])

  return (
    <div className="fixedHeight hidden min-h-full w-[300px] flex-col overflow-hidden bg-[#131722CC] mmd:flex">
      <Link
        href="/CG-AI/chat/chat-genius/newChat"
        className={`relative flex items-center gap-2 bg-themeAiChatSidebarBgDark p-4 text-lg ${
          params.chatType === 'chat-genius'
            ? 'font-medium text-white after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:bg-themeBorderBlue'
            : 'text-white/80'
        }`}
      >
        <Image src="/CgAi/ChatAi/chat-ai-1.png" height={50} width={50} alt="" />
        Chat Genius
      </Link>
      <Link
        href="/CG-AI/chat/trade-analyser/newChat"
        className={`relative flex items-center gap-2 bg-themeAiChatSidebarBgLight p-4 text-lg ${
          params.chatType === 'trade-analyser'
            ? 'font-medium text-white after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:bg-themeBorderBlue'
            : 'text-white/80'
        }`}
      >
        <Image src="/CgAi/ChatAi/chat-ai-2.png" height={50} width={50} alt="" />
        Trade Analyser
      </Link>
      <Link
        href="/CG-AI/chat/contract-insight/newChat"
        className={`relative flex items-center gap-2 bg-themeAiChatSidebarBgDark p-4 text-lg ${
          params.chatType === 'contract-insight'
            ? 'font-medium text-white after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:bg-themeBorderBlue'
            : 'text-white/80'
        }`}
      >
        <Image src="/CgAi/ChatAi/chat-ai-3.png" height={50} width={50} alt="" />
        Contract Insight
      </Link>
      <Link
        href="/CG-AI/chat/crypto-buzz/newChat"
        className={`relative flex items-center gap-2 bg-themeAiChatSidebarBgLight p-4 text-lg ${
          params.chatType === 'crypto-buzz'
            ? 'font-medium text-white after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:bg-themeBorderBlue'
            : 'text-white/80'
        }`}
      >
        <Image src="/CgAi/ChatAi/chat-ai-4.png" height={50} width={50} alt="" />
        Crypto Buzz
      </Link>
      <div className="mt-4 flex flex-col gap-4 border-t-2 border-white/30 py-4">
        <Button
          onClick={() => router.push(`/CG-AI/chat/${params.chatType}/newChat`)}
          className="mx-4 w-fit !rounded-full"
        >
          <IoMdAdd className="text-3xl" /> New Chat
        </Button>
      </div>
      <div className="flex flex-grow flex-col gap-4 overflow-y-scroll">
        <div className="flex flex-col">
          <span className="p-4 text-white/30">Previous 7 Days</span>
          {weekChat.map((item) => (
            <Link
              key={item.threadId}
              href={`/CG-AI/chat/${item.chatType}/${item.threadId}`}
              className="truncate px-4 py-2 odd:bg-themeAiChatSidebarBgDark even:bg-themeAiChatSidebarBgLight"
            >
              {item.title}
            </Link>
          ))}
        </div>
        {/* <div className="flex flex-col">
          <span className="p-4 text-white/30">This Month</span>
          {monthChat.map((item) => (
            <Link
              key={item.id}
              href={`/CG-AI/chat/${item.chatType}/${item.id}`}
              className="px-4 py-2 odd:bg-themeAiChatSidebarBgDark even:bg-themeAiChatSidebarBgLight"
            >
              {item.title}
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  )
}
