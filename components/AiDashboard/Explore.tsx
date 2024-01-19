'use client'

import Image from 'next/image'
import { useState } from 'react'
import Button from '@/components/shared/Button'
import Animated from '@/components/shared/Animated'
import ExploreCard from './ExploreCard'

export default function Explore() {
  const [tab, setTab] = useState('all')
  const cardData = [
    {
      name: 'Chat Genius',
      text: 'Your AI crypto chatbot for questions, market insights, and trading tips',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-1.png'
    },
    {
      name: 'Trade Analyser',
      text: 'Your Trading assistant for live market analyse and informed decisions',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-2.png'
    },
    {
      name: 'Contract Insight',
      text: 'Smart contract analysis tool for transparency and security',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-3.png'
    },
    {
      name: 'Crypto Buzz',
      text: 'Stay updated with real-time crypto news, trends, and crypto twitter',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-4.png'
    },
    {
      name: 'LaunchPad',
      text: 'Your gateway to early cryptocurrency opportunities',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-5.png'
    },
    {
      name: 'Market Stats',
      text: 'Stay informed with real-time cryptocurrency market data',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-6.png'
    },
    {
      name: 'Swap',
      text: 'Swap your cryptocurrencies with ease on CryptoGrad s user-friendly and secure platform',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-7.png'
    },
    {
      name: 'Stake',
      text: 'Stake your CG tokens to access a world of benefits within the CryptoGrad ecosystem',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-8.png'

    },
    {
      name: 'NFTs',
      text: 'Explore the world of CryptoGrad Avatars, coming soon...',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-9.png'
    },
    {
      name: 'Blogs',
      text: 'Explore a treasure of informative and insightful blogs on cryptocurrency, and blockchain',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-10.png'
    },
    {
      name: 'Discord',
      text: 'Our vibrant Discord community, where crypto enthusiasts, traders, and experts come together',
      type: 'CryptoGrad',
      icon: '/CgAi/ChatAi/chat-ai-11.png'
    },
    {
      name: 'Bybit',
      text: 'Lorem ipsum dolor simith, Lorem ipsum dolor simith, Lorem ipsum dolor simith,',
      type: 'CEX Partners',
      icon: '/CgAi/ChatAi/chat-ai-12.png'

    },
    {
      name: 'Kucoin',
      text: 'Lorem ipsum dolor simith, Lorem ipsum dolor simith, Lorem ipsum dolor simith,',
      type: 'CEX Partners',
      icon: '/CgAi/ChatAi/chat-ai-13.png'
    },
  ]
  return (
    <div className="w-full p-8">
      <div className="flex w-4/5 flex-col gap-8">
        <p className="text-5xl font-semibold leading-[130%]">
          Explore The CryptoGrad Ecosystem
        </p>
        <p className="text-xl font-normal leading-[140%] text-white/80">
          Explore AI-powered tools, NFTs, educational resources, and more as you
          embark on your crypto journey. Welcome to a vibrant ecosystem designed
          to empower and enrich your crypto experience.
        </p>
        <div className="flex h-12 w-full items-center justify-between rounded border border-solid border-white border-opacity-30 bg-[#070B16]">
          <input
            type="text"
            className="h-full w-full  bg-[#070B16] px-4"
            placeholder="Search Ecosystem"
          />
        </div>
        <Animated className="relative z-5 flex flex-col gap-16 pt-8">
          <div className="flex w-full items-center justify-between rounded-full bg-themeBlackBg p-2 font-light md:w-fit md:justify-center">
            <button
              onClick={() => setTab('all')}
              className={`rounded-full ${
                tab === 'All' && 'bg-themeBlackDeep'
              } px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base`}
            >
              All
            </button>
            <button
              onClick={() => setTab('CryptoGrad')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'analyzer' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              CryptoGrad
            </button>
            <button
              onClick={() => setTab('CEX Partners')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'insight' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              CEX Partners
            </button>
          </div>
        </Animated>
      </div>
      <div className="flex w-full overflow-x-scroll mmd:justify-center mmd:overflow-auto">
        <div className="relative z-1 mt-16 grid w-full min-w-[59rem] grid-cols-6 gap-4 md:w-fit mmd:min-w-0">
          {cardData.filter((item) => (tab === 'all' || item.type === tab)).map((item) => (
            <ExploreCard
              name={item.name}
              icon={item.icon}
              text={item.text}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
