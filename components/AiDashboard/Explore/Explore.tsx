'use client'

import Image from 'next/image'
import { useState } from 'react'
import Animated from '@/components/shared/Animated'
import ExploreCard, { IExploreData } from './ExploreCard'

const cardData: IExploreData[] = [
  {
    name: 'Chat Genius',
    path: '/CG-AI/chat/chat-genius/newChat',
    text: 'Your AI crypto chatbot for questions, market insights, and trading tips',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-1.png',
  },
  {
    name: 'Trade Analyser',
    path: '/CG-AI/chat/trade-analyzer/newChat',
    text: 'Your Trading assistant for live market analyse and informed decisions',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-2.png',
  },
  {
    name: 'Contract Insight',
    path: '/CG-AI/chat/contract-insight/newChat',
    text: 'Smart contract analysis tool for transparency and security',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-3.png',
  },
  {
    name: 'Crypto Buzz',
    path: '/CG-AI/chat/crypto-buzz/newChat',
    text: 'Stay updated with real-time crypto news, trends, and crypto twitter',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-4.png',
  },
  {
    name: 'LaunchPad',
    path: '#',
    text: 'Your gateway to early cryptocurrency opportunities',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-5.png',
  },
  {
    name: 'Market Stats',
    path: '#',
    text: 'Stay informed with real-time cryptocurrency market data',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-6.png',
  },
  {
    name: 'Swap',
    path: '/swap',
    text: 'Swap your cryptocurrencies with ease on CryptoGrad s user-friendly and secure platform',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-7.png',
  },
  {
    name: 'Stake',
    path: '/stake',
    text: 'Stake your CG tokens to access a world of benefits within the CryptoGrad ecosystem',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-8.png',
  },
  {
    name: 'NFTs',
    path: '#',
    text: 'Explore the world of CryptoGrad Avatars, coming soon...',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-9.png',
  },
  {
    name: 'Blogs',
    path: '/CG-AI/blog',
    text: 'Explore a treasure of informative and insightful blogs on cryptocurrency, and blockchain',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-10.png',
  },
  {
    name: 'Discord',
    path: 'https://discord.gg/GQJTSFdTwh',
    text: 'Our vibrant Discord community, where crypto enthusiasts, traders, and experts come together',
    type: 'CryptoGrad',
    icon: '/CgAi/ChatAi/chat-ai-11.png',
    target: true,
  },
  {
    name: 'Bybit',
    path: '#',
    text: 'Lorem ipsum dolor simith, Lorem ipsum dolor simith, Lorem ipsum dolor simith,',
    type: 'CEX Partners',
    icon: '/CgAi/ChatAi/chat-ai-12.png',
  },
  {
    name: 'Kucoin',
    path: '#',
    text: 'Lorem ipsum dolor simith, Lorem ipsum dolor simith, Lorem ipsum dolor simith,',
    type: 'CEX Partners',
    icon: '/CgAi/ChatAi/chat-ai-13.png',
  },
]

export default function Explore() {
  const [tab, setTab] = useState('all')
  return (
    <div className="w-full p-4 md:p-8">
      <p className="flex text-lg font-normal leading-[140%] md:hidden">
        AI Tasks on Fingertips
      </p>
      <div className="hidden w-4/5 flex-col gap-8 md:flex">
        <p className="text-5xl font-semibold leading-[130%]">
          Explore The CryptoGrad Ecosystem
        </p>
        <p className="text-xl font-normal leading-[140%] text-white/80">
          Explore AI-powered tools, NFTs, educational resources, and more as you
          embark on your crypto journey. Welcome to a vibrant ecosystem designed
          to empower and enrich your crypto experience.
        </p>
        <div className="relative h-12 w-1/2 items-center justify-between rounded-lg border border-[#FFFFFF4D] outline-none">
          <input
            type="text"
            className="h-full w-full rounded-lg border-none bg-inherit px-4 outline-none"
            placeholder="Search Ecosystem"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 transform">
            <Image
              className="h-8 w-8"
              src={'/CgAi/ChatAi/search.png'}
              alt=""
              width={800}
              height={800}
            />
          </div>
        </div>

        <Animated className="relative z-5 hidden flex-col gap-16 pt-8 md:flex">
          <div className="flex w-full items-center justify-between rounded-full bg-themeBlackBg p-2 font-light md:w-fit md:justify-center">
            <button
              onClick={() => setTab('all')}
              className={`rounded-full ${
                tab === 'All' && 'bg-themeBlackDeep'
              } px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base ${
                tab === 'all' && 'bg-themeBlackDeep'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setTab('CryptoGrad')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'CryptoGrad' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              CryptoGrad
            </button>
            <button
              onClick={() => setTab('CEX Partners')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'CEX Partners' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              CEX Partners
            </button>
          </div>
        </Animated>
      </div>
      <div className="flex w-full overflow-x-scroll mmd:justify-center mmd:overflow-auto">
        <div className="relative z-1 mt-4 grid w-full gap-4 md:mt-16 md:w-fit md:grid-cols-2 mmd:min-w-0 xl:grid-cols-3">
          {cardData
            .filter((item) => tab === 'all' || item.type === tab)
            .map((item, index) => (
              <ExploreCard data={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  )
}
