export default function AiChatPage({
  params,
}: {
  params: {
    chatType:
      | 'chat-genius'
      | 'trade-analyser'
      | 'contract-insight'
      | 'crypto-buzz'
    chatId: string
  }
}) {
  return <div>{params.chatType}</div>
}
