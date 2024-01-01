'use client'

import Countdown, { CountdownRenderProps } from 'react-countdown'
import Button from '../shared/Button'
import { ButtonType } from '@/types/buttton'
import { useEffect, useState } from 'react'
import NftDroppedDialog from './NftDroppedDialog'
import { makeMeTwoDigits } from '@/utils/numberFix'
import { useRouter } from 'next/navigation'

const NftDroppingTimer = () => {
  const [timer, setTimer] = useState(1704306600000)
  const navigate = useRouter()

  useEffect(() => {}, [])

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return (
        <>
          <div className="flex w-fit items-center justify-center gap-2 text-xs md:gap-4 md:text-base">
            <div className="font-semibold">Pre-Sale Started</div>
            <Button
              onClick={() => navigate.push('presale')}
              type={ButtonType.SECONDARY}
            >
              Buy Now
            </Button>
          </div>
          <NftDroppedDialog />
        </>
      )
    } else {
      return (
        <div className="flex w-fit items-center justify-center gap-2 text-xs opacity-80 md:gap-4 md:text-base">
          <div className="font-semibold">Pre-Sale starts in</div>
          <div className="flex items-start gap-1">
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold">{makeMeTwoDigits(days)}d</span>
              {/* <span className="text-2xs font-light">Days</span> */}
            </div>
            <span className="font-bold">:</span>
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold">{makeMeTwoDigits(hours)}h</span>
              {/* <span className="text-2xs font-light">Hours</span> */}
            </div>
            <span className="font-bold">:</span>
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold">{makeMeTwoDigits(minutes)}m</span>
              {/* <span className="text-2xs font-light">Minutes</span> */}
            </div>
            <span className="font-bold">:</span>
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold">{makeMeTwoDigits(seconds)}s</span>
              {/* <span className="text-2xs font-light">Seconds</span> */}
            </div>
          </div>
        </div>
      )
    }
  }
  return <Countdown date={timer} renderer={renderer} />
}

export default NftDroppingTimer
