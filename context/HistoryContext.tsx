'use client'

import { addUserChat, getUserChat } from '@/services/chat'
import { Children } from '@/types/generics'
import { createContext, useEffect, useState } from 'react'

export interface IChat {
  threadId: string
  title: string
  chatType: string
}

export interface IHistoryCtx {
  addChat: (chat: IChat) => Promise<void>
  allChat: IChat[]
}

export const HistoryContext = createContext<IHistoryCtx | null>(null)

export const HistoryProvider = ({ children }: Children) => {
  const [allChat, setAllChat] = useState<IChat[]>([])

  const getChat = async () => {
    const res = await getUserChat()
    console.log(res.data)
    setAllChat([...res.data])
  }

  const addChat = async (chat: IChat) => {
    try {
      await addUserChat(chat)
      await getChat()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChat()
  }, [])

  return (
    <HistoryContext.Provider value={{ addChat, allChat }}>
      {children}
    </HistoryContext.Provider>
  )
}
