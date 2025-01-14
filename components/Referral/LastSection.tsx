'use client'

import Image from 'next/image'
import Animated from '../shared/Animated'
import AiSectionImage from '../Homepage/AiSectionImage'
import { BsDiscord, BsTelegram } from 'react-icons/bs'
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import useWallet from '@/hooks/useWallet'
import Toast from '../shared/Toast'
import { Button } from '@mui/material'

const LastSection = () => {
  const { isConnected } = useAccount()
  const [referralId, setReferralId] = useState('')
  const { connectWallet } = useWallet()

  useEffect(() => {
    const referralId = localStorage.getItem('referralId')
    referralId && setReferralId(referralId)
  }, [])
  return (
    <Animated className="relative overflow-hidden z-1 flex w-full flex-col items-center px-4 pt-20 md:min-w-fit mmd:flex-row mmd:px-16">
      <Image
        src="/Homepage/LargeToken/largeToken.png"
        alt=""
        width={489}
        height={492}
        className="blur-xs absolute -right-8 bottom-0 hidden h-24 w-24 mmd:block"
      />
      <div className="flex flex-col items-start">
        <div className="relative z-1 text-lg font-medium text-themeBlue mmd:text-left">
          Embrace Growth
        </div>
        <div className="mt-2 whitespace-nowrap text-3xl font-bold md:text-5xl mmd:text-left">
          Be a Part of <br /> Something Special
        </div>
        <div className="mb-8 mt-4 text-white/80 mmd:w-96 mmd:text-left">
          Step into a space where ideas flourish, like minds connect, and
          inspiration knows no bounds. Join us now!
        </div>
        <div className="flex gap-1 md:gap-2">
          {isConnected ? (
            <Toast
              refId={referralId}
              disabled={referralId ? false : true}
              className="flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
            >
              Share Referral
            </Toast>
          ) : (
            <Button onClick={connectWallet} className="!text-base !font-light">
              Generate Referal link
            </Button>
          )}
          <a
            href="https://discord.gg/GQJTSFdTwh"
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-12 min-h-[2.5rem] w-12 items-center justify-center gap-2 rounded-lg border-2 border-themeBorderBlue bg-themeBlack text-lg font-medium transition-all hover:text-themeVioletText"
          >
            <BsDiscord className="!text-2xl" />
          </a>
          <a
            href="https://t.me/cryptogradportal"
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-12 min-h-[2.5rem] w-12 items-center justify-center gap-2 rounded-lg border-2 border-themeBorderBlue bg-themeBlack text-lg font-medium transition-all hover:text-themeVioletText"
          >
            <BsTelegram className="!text-2xl" />
          </a>
        </div>
      </div>
      <AiSectionImage />
    </Animated>
  )
}

export default LastSection
