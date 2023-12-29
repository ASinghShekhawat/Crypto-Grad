'use client'

import { makeMeTwoDigits } from '@/utils/numberFix'
import Image from 'next/image'
import { useState } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import Animated from '../shared/Animated'
import Button from '../shared/Button'

export default function Timer() {
  const [timer, setTimer] = useState(Date.now() + 5000000)

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) return <>Presale Ended!</>
    return (
      <div className="flex items-start gap-4 font-bold relative z-1">
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg border border-themeBorderBlue/25 px-3 py-4 md:w-[4.12rem]">
          <span className="text-xl leading-7 md:text-3xl">
            {makeMeTwoDigits(days)}
          </span>
          <span className="text-xs">Days</span>
        </div>
        <span className="mt-2 text-3xl">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg border border-themeBorderBlue/25 px-3 py-4 md:w-[4.12rem]">
          <span className="text-xl leading-7 md:text-3xl">
            {makeMeTwoDigits(hours)}
          </span>
          <span className="text-xs">Hours</span>
        </div>
        <span className="mt-2 text-3xl">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg border border-themeBorderBlue/25 px-3 py-4 md:w-[4.12rem]">
          <span className="text-xl leading-7 md:text-3xl">
            {makeMeTwoDigits(minutes)}
          </span>
          <span className="text-xs">Mins</span>
        </div>
        <span className="mt-2 text-3xl">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg border border-themeBorderBlue/25 px-3 py-4 md:w-[4.12rem]">
          <span className="text-xl leading-7 md:text-3xl">
            {makeMeTwoDigits(seconds)}
          </span>
          <span className="text-xs">Secs</span>
        </div>
      </div>
    )
  }
  return (
    <Animated className="relative z-1 flex flex-col items-center justify-center overflow-hidden gap-8 px-8 pb-16 pt-24 mmd:px-16">
      <div className="floating absolute -left-8 top-0 z-0 md:left-8">
        <Image
          src="/Presale/nfts (1).png"
          width={800}
          height={737}
          alt=""
          className="h-36 w-fit -rotate-12 object-contain mmd:h-48"
        />
      </div>
      <div
        className="floating absolute -right-8 bottom-0 md:bottom-8 z-0 md:right-8"
        data-delay={1000}
      >
        <Image
          src="/Presale/nfts (2).png"
          width={800}
          height={803}
          alt=""
          className="h-36 w-fit rotate-12 object-contain mmd:h-48"
        />
      </div>
      <div className="flex flex-col items-center justify-center relative z-1">
        <div className="relative z-1 text-center text-lg font-medium text-themeBlue">
          Time is ticking fast!
        </div>
        <div className="relative z-10 text-center text-3xl font-bold md:text-5xl">
          Presale Countdown
        </div>
      </div>
      <Countdown date={timer} renderer={renderer} />
      <div className="text-lg relative z-1">Lets get going with the Presale!</div>
      <Button className="h-12 !font-light capitalize relative z-1">buy & Stake Now</Button>
    </Animated>
  )
}
