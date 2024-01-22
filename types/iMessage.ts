import { MessageContentImageFile, MessageContentText } from "openai/resources/beta/threads/messages/messages.mjs"

export interface IMessage {
  id: string
  role: 'assistant' | 'user' | 'system'
  content: Array<MessageContentImageFile | MessageContentText>
}