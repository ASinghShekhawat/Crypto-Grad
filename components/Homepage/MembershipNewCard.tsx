'use client'

import { ButtonType } from '@/types/buttton'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { CgCheckO } from 'react-icons/cg'
import Button from '../shared/Button'
import { useRouter } from 'next/navigation'

interface IMembershipNewCard {
  price: number
  apy: 2 | 4 | 7
  planType: 1 | 3 | 12
  page?: boolean
}

const MembershipNewCard = ({
  price,
  apy,
  planType,
  page,
}: IMembershipNewCard) => {
  const router = useRouter()
  return (
    <div
      className={`flex h-full w-full flex-col items-center  gap-4 rounded-2xl bg-themeBgBlack p-5`}
    >
      <div className="flex h-8 w-full items-center justify-between gap-12">
        <div className="font-semibold tracking-widest text-themeBlue">
          {planType} MONTH
        </div>
        {planType === 3 && (
          <div className="rounded-full bg-themeBorderBlue px-2 py-0.5 font-medium">
            Most Popular!
          </div>
        )}
      </div>
      <div className="flex h-14 w-full items-center gap-2">
        <Image
          src="/Homepage/LargeToken/largeToken.png"
          alt=""
          width={489}
          height={492}
          className="h-full w-fit object-contain"
        />
        <div className="text-5xl font-bold">
          ${price}
          {/* <span className="text-base font-normal">
            /mo<sup>*</sup>
          </span> */}
        </div>
      </div>
      <div className="w-full text-left text-themeLightGrey">
        Elevate your crypto journey and <br /> broaden your network.
      </div>
      <Button
        className="w-full"
        onClick={() => router.push(page ? '/stake' : '/membership')}
        type={planType === 3 ? ButtonType.PRIMARY : ButtonType.SECONDARY}
      >
        Get Started <BsArrowRight />
      </Button>
      <div className="mt-2 flex w-full flex-col gap-3 text-left">
        <div className="text-lg font-semibold">Benefits</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            {apy}% APY
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            AI Chatbot
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            Market Analysis by Traders
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            Access to educational content
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            AI Trading Assistant
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            AI Powered News
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            Discord Community
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            Access to Webinars
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            Smart Contract Analysis Tools
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            AI CryptoTwitter Analysis
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            Exclusive TradingView Indicators
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            24/7 Chat support
          </div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            0% transaction fee
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            15 products
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            15 funnels
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            Unlimited landing pages
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            Unlimited marketing emails
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            25,000 contacts
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            10,000 active customers
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />1 website
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-themeBorderBlue" />
            10 admin users
          </div>
        </div> */}
      </div>
      {/* {planType === 3 && (
        <div className="mt-2 flex w-full flex-col gap-3 text-left">
          <div className="text-lg font-semibold">
            All 1 Month Features, plus
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CgCheckO className="text-themeBorderBlue" />
              Affiliate program
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-themeBorderBlue" />
              24/7 Chat support
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-themeBorderBlue" />
              Advanced automations
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-themeBorderBlue" />
              Ability to remove Kajabi branding
            </div>
          </div>
        </div>
      )}
      {planType === 12 && (
        <div className="mt-2 flex w-full flex-col gap-3 text-left">
          <div className="text-lg font-semibold">
            All 3 Month Features, plus
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CgCheckO className="text-themeBorderBlue" />
              24/7 Chat support
            </div>
          </div>
        </div>
      )} */}
      {/* <em className="w-full text-left text-xs font-light">
        <sup>*</sup>+ applicable taxes
      </em> */}
    </div>
  )
}

export default MembershipNewCard
