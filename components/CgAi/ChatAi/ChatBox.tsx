'use client'

import { ChatParams } from '@/types/chatParams'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { LuPlay } from 'react-icons/lu'
import ChatboxHeader from './ChatboxHeader'
import Chat from './Chat'
import OpenAI from 'openai'
import { IMessage } from '@/types/iMessage'
import Button from '@/components/shared/Button'
import { ButtonType } from '@/types/buttton'
import { FiStopCircle } from 'react-icons/fi'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, //! Need a backend
})

export default function ChatBox({
  params,
  searchParams,
}: {
  params: ChatParams
  searchParams: { [key: string]: string | undefined }
}) {
  const [started, setStarted] = useState(false)
  const [messages, setMessages] = useState<IMessage[]>([])
  const [message, setMessage] = useState('')
  const [responding, setResponding] = useState(false)
  const [cancelled, setCancelled] = useState(false)
  const router = useRouter()

  const stopResponding = () => {
    // setCancelled(true)
    // setResponding(false)
  }

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault()
    if (!message) return
    setCancelled(false)
    setResponding(true)
    const userMessageTemp: IMessage[] = [
      ...messages,
      { role: 'user', content: message },
    ]
    setMessages(userMessageTemp)
    setMessage('')

    try {
      const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: userMessageTemp,
        stream: true,
      })

      const assistantMessageTemp: IMessage[] = [
        ...userMessageTemp,
        { role: 'assistant', content: '' },
      ]

      setMessages(assistantMessageTemp)
      for await (const chunk of stream) {
        // if (cancelled) 
        const tempArr = [...assistantMessageTemp]
        const lastItem = tempArr.length - 1
        tempArr[lastItem].content += chunk.choices[0]?.delta?.content || ''
        setMessages([...tempArr])
      }
      setResponding(false)
    } catch (error) {
      console.error('Error:', error)
      setResponding(false)
    }
  }

  useEffect(() => {
    if (
      params.chatType === 'chat-genius' ||
      params.chatType === 'trade-analyser'
    ) {
      if (!searchParams.tab) {
        router.push(
          `/CG-AI/chat/${params.chatType}/${params.chatId}?tab=beginner`
        )
      }
    }
  }, [params])

  useEffect(() => {
    if (messages.length > 0) setStarted(true)
  }, [messages])
  return (
    <div className="fixedHeight flex w-full flex-col overflow-hidden">
      <ChatboxHeader
        chatId={params.chatId}
        searchtab={searchParams.tab}
        chatType={params.chatType}
        started={started}
      />

      <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden px-4 pb-4 md:pb-8">
        <Chat
          chatId={params.chatId}
          searchtab={searchParams.tab}
          chatType={params.chatType}
          started={started}
          messages={messages}
        />
        {responding && (
          <Button
            onClick={stopResponding}
            type={ButtonType.SECONDARY}
            className="absolute bottom-32 left-0 right-0 mx-auto h-12 w-fit !rounded-xl"
          >
            <FiStopCircle className="text-3xl text-themeBlue" /> Stop Responding
          </Button>
        )}

        <div className="flex min-h-[6rem] w-full flex-col items-center justify-end overflow-hidden">
          <form
            onSubmit={sendMessage}
            className="flex w-full items-center justify-between rounded-lg bg-[#131722] p-4"
          >
            <input
              type="text"
              className="w-full border-none bg-inherit outline-none"
              placeholder="Message CG AI"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="text-2xl text-themeBorderBlue">
              <LuPlay />
            </button>
          </form>
          <div className="mt-2 text-center text-sm text-white/40">
            CG AI may display inaccurate info since it is in Beta, including
            about people, so double-check its responses.{' '}
            <Link href="/help/privacy-policy" className="underline">
              Your privacy and CG AI.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
