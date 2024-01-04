'use client'

import { useEffect, useState } from 'react'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import Toast from '../shared/Toast'
import Calculator from './Calculator'

export default function Hero() {
  const [referralId, setReferralId] = useState('')

  useEffect(() => {
    const referralId = localStorage.getItem('referralId')
    referralId && setReferralId(referralId)
  }, [])

  return (
    <Animated className="relative z-1 flex flex-col items-center justify-center gap-16 bg-gradient-to-b from-[#6754f82b] via-transparent to-transparent px-4 pb-0 pt-16 md:from-transparent md:pt-24 mmd:flex-row mmd:px-16">
      <div className="flex w-full flex-col text-left">
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
          Refer & Earn
        </div>
        <div className="z-10 text-center font-light text-white/80">
          Unlock Rewards: Join the CryptoGrad Referral Program Today!
        </div>
        <div className="flex w-full justify-center">
          <Toast
            refId={referralId}
            disabled={referralId ? false : true}
            className="mt-4 flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
          >
            Get your affiliate link
          </Toast>
        </div>
      </div>
      <Calculator />
    </Animated>
  )
}
