'use client'

import { ChatParams } from '@/types/chatParams'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { LuPlay } from 'react-icons/lu'
import ChatboxHeader from './ChatboxHeader'
import Chat from './Chat'
import OpenAI from 'openai'
import { FaPaperclip } from 'react-icons/fa6'
import Button from '@/components/shared/Button'
import { ButtonType } from '@/types/buttton'
import { FiStopCircle } from 'react-icons/fi'
import { CgSpinner } from 'react-icons/cg'
import Image from 'next/image'
import { uploadImage } from '@/services/file'
import useChat from '@/hooks/useChat'

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
  const [messages, setMessages] = useState<
    OpenAI.Beta.Threads.Messages.ThreadMessage[]
  >([])
  const [message, setMessage] = useState('')
  const [image, setImage] = useState<any>()
  const [responding, setResponding] = useState(false)
  const [cancelled, setCancelled] = useState(false)
  const [fileInfo, setFileInfo] = useState<OpenAI.Files.FileObject>()
  const [threadId, setThreadId] = useState('')
  const [imageUploading, setImageUploading] = useState(false)
  const [url, setUrl] = useState('')
  const { addChat } = useChat()
  const router = useRouter()
  const imageInputRef = useRef<any>()

  const stopResponding = () => {
    // setCancelled(true)
    // setResponding(false)
  }

  const initiateChat = async () => {
    if (params.chatId === 'newChat') {
      const { id } = await openai.beta.threads.create()
      router.push(
        `/CG-AI/chat/${params.chatType}/${id}?tab=${searchParams.tab}`
      )
    } else {
      setThreadId(params.chatId)
      const messagesAll = await openai.beta.threads.messages.list(
        params.chatId,
        {
          stream: false,
        }
      )
      setMessages([...messagesAll.data.reverse()])
    }
  }

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files || !files[0]) return
    if (files[0].size > 5000000) return
    setImage(files[0])
    setImageUploading(true)

    try {
      const res = await openai.files.create({
        file: files[0],
        purpose: 'assistants',
      })
      const formData = new FormData()
      formData.append('file', files[0])
      formData.append('id', res.id)
      const resAws = await uploadImage(formData)
      console.log(resAws)
      setFileInfo(res)
      setUrl(URL.createObjectURL(files[0]))
      setImageUploading(false)
    } catch (error) {
      setImageUploading(false)
      console.log(error)
    }
  }

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault()
    if (!message) return
    setCancelled(false)
    setResponding(true)
    setMessage('')
    setUrl('')

    if (params.chatType === 'chat-genius') {
      const userMessage = await openai.beta.threads.messages.create(threadId, {
        role: 'user',
        content: message,
      })

      const tempArr = [...messages, userMessage]
      setMessages([...tempArr])

      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: process.env.NEXT_PUBLIC_CHAT_GENIUS_ASSISTANT_ID!,
      })

      while (true) {
        const status = await openai.beta.threads.runs.retrieve(threadId, run.id)
        if (status.status === 'completed') break
        else if (status.status === 'failed') {
          setResponding(false)
          console.log('error', status)
          break
        }
      }

      const messagesAll = await openai.beta.threads.messages.list(threadId, {
        stream: false,
      })
      if (tempArr.length === 1) {
        await addChat({
          threadId,
          title: message.length > 50 ? message.substring(0, 50) : message,
          chatType: params.chatType,
        })
      }

      setMessages([...tempArr, messagesAll.data[0]])
      setResponding(false)
    } else if (params.chatType === 'trade-analyser') {
      const userMessage = await openai.beta.threads.messages.create(
        threadId,
        fileInfo
          ? {
              role: 'user',
              content: message,
              file_ids: [fileInfo.id],
            }
          : {
              role: 'user',
              content: message,
            }
      )

      const tempArr = [...messages, userMessage]
      setMessages([...tempArr])

      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: process.env.NEXT_PUBLIC_CHAT_TRADE_ANALYZER_ID!,
      })

      while (true) {
        const status = await openai.beta.threads.runs.retrieve(threadId, run.id)
        if (status.status === 'completed') break
        else if (status.status === 'failed') {
          setResponding(false)
          console.log('error', status)
          break
        }
      }

      const messagesAll = await openai.beta.threads.messages.list(threadId, {
        stream: false,
      })

      setMessages([...tempArr, messagesAll.data[0]])
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

  useEffect(() => {
    initiateChat()
  }, [])

  return (
    <div className="fixedHeightMob flex w-full flex-col overflow-hidden">
      <ChatboxHeader
        chatId={params.chatId}
        searchtab={searchParams.tab}
        chatType={params.chatType}
        started={started}
      />

      <div className="relative z-0 flex h-full flex-col justify-between gap-4 overflow-hidden px-4 pb-4 md:pb-8">
        <Chat
          chatId={params.chatId}
          searchtab={searchParams.tab}
          chatType={params.chatType}
          started={started}
          messages={messages}
        />
        <div className="flex w-full flex-grow flex-col items-center justify-end ">
          <form
            onSubmit={sendMessage}
            className="flex w-full items-center justify-between rounded-lg bg-themeNavBlack p-4"
          >
            <div className="flex flex-grow flex-col gap-8">
              <input
                type="text"
                className="w-full border-none bg-inherit outline-none"
                placeholder="Message CG AI"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {url && (
                <div className="relative z-0 aspect-video w-full md:max-w-[300px]">
                  <Image src={url} fill alt="" className="object-cover" />
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              {params.chatType === 'trade-analyser' && (
                <>
                  <button
                    disabled={imageUploading}
                    type="button"
                    onClick={() => imageInputRef.current.click()}
                    className="text-xl text-themeBorderBlue"
                  >
                    {imageUploading ? (
                      <CgSpinner className="animate-spin" />
                    ) : (
                      <FaPaperclip />
                    )}
                  </button>
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="absolute z-0 h-0 w-0 opacity-0"
                  />
                </>
              )}
              <button
                disabled={responding}
                type="submit"
                className="text-2xl text-themeBorderBlue"
              >
                {responding ? (
                  <CgSpinner className="animate-spin" />
                ) : (
                  <LuPlay />
                )}
              </button>
            </div>
          </form>
          <div className="mt-2 text-center text-xs text-white/40 md:text-sm">
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
