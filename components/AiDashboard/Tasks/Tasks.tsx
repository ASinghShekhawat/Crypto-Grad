'use client'

import { useState } from 'react'
import Animated from '@/components/shared/Animated'
import TaskCard from './TaskCard'
import { TaskData } from '@/utils/TaskData'

export default function Tasks() {
  const [tab, setTab] = useState('chat')
  return (
    <div className="flex w-full flex-col gap-4 p-4 md:p-8">
      <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
        <p className="hidden text-xl font-semibold leading-[130%] md:block md:text-5xl">
          AI Tasks
        </p>
        <p className="block text-xl font-semibold leading-[130%] md:hidden md:text-5xl">
          AI Tasks on Fingertips
        </p>
        <Animated className="relative z-5 flex flex-col gap-16">
          <div className="flex w-full items-center justify-between rounded-full bg-themeBlackBg p-2 font-light md:w-fit md:justify-center">
            <button
              onClick={() => setTab('chat')}
              className={`rounded-full ${
                tab === 'All' && 'bg-themeBlackDeep'
              } px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base ${
                tab === 'chat' && 'bg-themeBlackDeep'
              }`}
            >
              Chat Genius
            </button>
            <button
              onClick={() => setTab('trade')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'trade' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              Trade Analyser
            </button>
            <button
              onClick={() => setTab('contract')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'contract' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              Contract Insight
            </button>
            <button
              onClick={() => setTab('crypto')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'crypto' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              Crypto Buzz
            </button>
          </div>
        </Animated>
      </div>
      <div className="flex w-full overflow-x-scroll mmd:overflow-auto ">
        <div className="relative z-1 grid w-full grid-cols-8 gap-4 mmd:min-w-0">
          {TaskData.filter((item) => tab === item.type).map((item, index) => (
            <TaskCard
              name={item.name}
              icon={item.icon}
              key={index}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
