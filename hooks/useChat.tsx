import { HistoryContext, IHistoryCtx } from '@/context/HistoryContext'
import { useContext } from 'react'

const useChat = () => {
  const { addChat, allChat } = useContext(HistoryContext) as IHistoryCtx
  return { addChat, allChat }
}

export default useChat
