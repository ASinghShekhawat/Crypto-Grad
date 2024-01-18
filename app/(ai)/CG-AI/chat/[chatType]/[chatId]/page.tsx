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
  return (
    <div className="fixedHeight flex flex-col overflow-hidden px-4 py-4 md:py-8">
      <div className="felx items-center justify-between">
        <div className="text-3xl font-semibold capitalize md:text-5xl">
          {params.chatType.split('-').join(' ')}
        </div>
      </div>
    </div>
  )
}
