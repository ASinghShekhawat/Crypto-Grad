'use client'

import Image from 'next/image'
import { useState } from 'react'
import Animated from './Animated'

export default function TabInfo() {
  const [tab, setTab] = useState('chat')
  return (
    <Animated className="relative z-5 flex flex-col items-center justify-center gap-16 px-2 pt-8 md:px-4 mmd:px-16">
      <div className="flex w-full items-center justify-between rounded-full bg-themeBlackBg p-2 font-light md:w-fit md:justify-center">
        <button
          onClick={() => setTab('chat')}
          className={`rounded-full ${
            tab === 'chat' && 'bg-themeBlackDeep'
          } px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base`}
        >
          Chat Genius
        </button>
        <button
          onClick={() => setTab('analyzer')}
          className={`rounded-full px-2.5 py-2 text-xs transition-all ${
            tab === 'analyzer' && 'bg-themeBlackDeep'
          } hover:bg-themeBlackDeep md:text-base`}
        >
          Trade Analyzer
        </button>
        <button
          onClick={() => setTab('insight')}
          className={`rounded-full px-2.5 py-2 text-xs transition-all ${
            tab === 'insight' && 'bg-themeBlackDeep'
          } hover:bg-themeBlackDeep md:text-base`}
        >
          Contract Insight
        </button>
        <button
          onClick={() => setTab('buzz')}
          className={`rounded-full px-2.5 py-2 text-xs transition-all ${
            tab === 'buzz' && 'bg-themeBlackDeep'
          } hover:bg-themeBlackDeep md:text-base`}
        >
          Crypto Buzz
        </button>
      </div>
      <div className="relative h-fit w-full overflow-hidden">
        <Image
          src="/Homepage/Hero/HeroMain.svg"
          className="w-full object-cover"
          width={1312}
          height={743}
          alt=""
        />
        {tab === 'chat' && (
          <div className="absolute bottom-0 left-0 right-0 mx-auto flex w-[80%] justify-center overflow-hidden rounded-t-2xl">
            <Image
              src="/Homepage/border.png"
              alt=""
              width={967}
              height={665}
              className="absolute left-0 right-0 top-[2.4%] w-full"
            />
            <video
              autoPlay
              loop
              muted
              className="mx-auto mt-[5%] h-full !w-[95%] max-w-none"
            >
              <source src="/Homepage/1.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        {tab === 'analyzer' && (
          <div className="absolute bottom-0 left-0 right-0 mx-auto flex w-[80%] justify-center overflow-hidden rounded-t-2xl">
            <Image
              src="/Homepage/border.png"
              alt=""
              width={967}
              height={665}
              className="absolute left-0 right-0 top-[3.5%] w-full"
            />
            <video
              autoPlay
              loop
              muted
              className="mx-auto mt-[5%] h-full !w-[94.1%] max-w-none"
            >
              <source src="/Homepage/2.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        {tab === 'insight' && (
          <div className="absolute bottom-0 left-0 right-0 mx-auto flex w-[80%] justify-center overflow-hidden rounded-t-2xl">
          <Image
            src="/Homepage/border.png"
            alt=""
            width={967}
            height={665}
            className="absolute left-0 right-0 top-[3.5%] w-full"
          />
          <video
            autoPlay
            loop
            muted
            className="mx-auto mt-[5%] h-full !w-[94.1%] max-w-none"
          >
            <source src="/Homepage/4.mp4" type="video/mp4" />
          </video>
        </div>
        )}
        {tab === 'buzz' && (
          <div className="absolute -bottom-[2%] left-0 right-0 mx-auto flex w-[80%] justify-center overflow-hidden rounded-t-2xl">
          <Image
            src="/Homepage/border.png"
            alt=""
            width={967}
            height={665}
            className="absolute left-0 right-0 top-[3.5%] w-full"
          />
          <video
            autoPlay
            loop
            muted
            className="mx-auto mt-[6%] relative h-full !w-[94.1%] max-w-none"
          >
            <source src="/Homepage/5.mp4" type="video/mp4" />
          </video>
        </div>
        )}
      </div>
    </Animated>
  )
}
