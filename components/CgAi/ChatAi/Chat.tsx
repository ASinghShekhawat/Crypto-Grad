'use client'

import { IMessage } from '@/types/iMessage'
import UserMessage from './UserMessage'
import AssistantMessage from './AssistantMessage'

const DefaultOptions = {
  'chat-genius': [
    {
      title: 'Learning Basics',
      actions: [
        {
          title: "Beginner's Guide",
          prompt: '',
        },
        {
          title: 'Proof of Stake (PoS)',
          prompt: '',
        },
        {
          title: 'Setting up wallets',
          prompt: '',
        },
      ],
    },
    {
      title: 'Trading',
      actions: [
        {
          title: 'RSI Divergence',
          prompt: '',
        },
        {
          title: 'Fibonacci Sequence',
          prompt: '',
        },
        {
          title: 'Optimal Risk %',
          prompt: '',
        },
      ],
    },
    {
      title: 'Getting in Depth',
      actions: [
        {
          title: 'Shitcoin Basics',
          prompt: '',
        },
        {
          title: 'Finding next 10x coin',
          prompt: '',
        },
        {
          title: 'Managing emotions',
          prompt: '',
        },
      ],
    },
  ],
  'trade-analyser': [
    {
      title: 'Analyse',
      actions: [
        {
          title: 'Analyse this chart',
          prompt: '',
        },
        {
          title: 'Suggest stop loss',
          prompt: '',
        },
        {
          title: 'Price action analysis',
          prompt: '',
        },
      ],
    },
    {
      title: 'Recommend',
      actions: [
        {
          title: 'Coins in AI',
          prompt: '',
        },
        {
          title: 'Portfolio adjustments',
          prompt: '',
        },
        {
          title: 'Risk management',
          prompt: '',
        },
      ],
    },
    {
      title: 'Learn',
      actions: [
        {
          title: 'Greed & Fear Index',
          prompt: '',
        },
        {
          title: 'Current Market Sentiment',
          prompt: '',
        },
        {
          title: 'Analyze Fisher Model',
          prompt: '',
        },
      ],
    },
  ],
  'contract-insight': [
    {
      title: 'Analysis',
      actions: [
        {
          title: 'Audit smart contract',
          prompt: '',
        },
        {
          title: 'Tax inspection',
          prompt: '',
        },
        {
          title: 'Top 10 holders',
          prompt: '',
        },
      ],
    },
    {
      title: 'Alerts',
      actions: [
        {
          title: 'Burn events',
          prompt: '',
        },
        {
          title: 'New liquidity pools',
          prompt: '',
        },
        {
          title: 'Fresh wallet attempts',
          prompt: '',
        },
      ],
    },
    {
      title: 'Trace',
      actions: [
        {
          title: 'Track a wallet',
          prompt: '',
        },
        {
          title: 'Track twitter influencers',
          prompt: '',
        },
        {
          title: 'Track telegram calls',
          prompt: '',
        },
      ],
    },
  ],
  'crypto-buzz': [
    {
      title: 'Summarise',
      actions: [
        {
          title: "Today's news",
          prompt: '',
        },
        {
          title: 'News by SEC on crypto',
          prompt: '',
        },
        {
          title: 'Latest Articles',
          prompt: '',
        },
      ],
    },
    {
      title: 'Buzzed',
      actions: [
        {
          title: 'On-chain coin',
          prompt: '',
        },
        {
          title: 'CEX listed ticker',
          prompt: '',
        },
        {
          title: 'Fair Launches%',
          prompt: '',
        },
      ],
    },
    {
      title: 'Monitor',
      actions: [
        {
          title: 'Influencers',
          prompt: '',
        },
        {
          title: 'Major News Events',
          prompt: '',
        },
        {
          title: 'Airdrop Farming',
          prompt: '',
        },
      ],
    },
  ],
}

export default function Chat({
  chatType,
  chatId,
  searchtab,
  started,
  messages,
}: {
  chatType:
    | 'chat-genius'
    | 'trade-analyser'
    | 'contract-insight'
    | 'crypto-buzz'
  chatId: string
  searchtab?: string
  started: boolean
  messages: IMessage[]
}) {
  return !started ? (
    <div className="grid grid-cols-3 gap-4">
      {DefaultOptions[chatType].map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-3 rounded-2xl bg-themeBgBlack p-4"
        >
          <div className="mb-1 text-2xl font-medium text-themeBorderBlue">
            {item.title}
          </div>
          {item.actions.map((action) => (
            <button
              className="w-fit rounded-full bg-[#131314] px-4 py-2"
              key={action.title}
            >
              {action.title}
            </button>
          ))}
        </div>
      ))}
    </div>
  ) : (
    <div className="mt-4 flex flex-grow flex-col gap-4 overflow-y-scroll">
      {messages.map((message, i) => (
        <>
          {message.role === 'user' && (
            <UserMessage key={i} message={message.content} />
          )}
          {message.role === 'assistant' && (
            <AssistantMessage key={i} message={message.content} />
          )}
        </>
      ))}
    </div>
  )
}
