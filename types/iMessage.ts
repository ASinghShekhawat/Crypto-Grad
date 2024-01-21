export interface IMessage {
  role: 'assistant' | 'user' | 'system'
  content: string
}