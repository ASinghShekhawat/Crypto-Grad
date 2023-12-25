import { ButtonType } from '@/types/buttton'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { CgCheckO } from 'react-icons/cg'
import Button from '../shared/Button'

interface IMembershipNewCard {
  price: number
  planType: 1 | 3 | 12
}

const MembershipNewCard = ({ price, planType }: IMembershipNewCard) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div
        className={`flex h-fit w-full flex-col items-center  gap-4 rounded-2xl ${
          planType === 3 ? 'h-fit' : 'h-[48rem]'
        } bg-themeBgBlack p-5`}
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
            {price}
            <span className="text-base font-normal">
              /mo<sup>*</sup>
            </span>
          </div>
        </div>
        <div className="text-themeLightGrey w-full text-left">
          Expand your offering and grow <br />
          your audience
        </div>
        <Button
          className="w-full"
          type={planType === 3 ? ButtonType.PRIMARY : ButtonType.SECONDARY}
        >
          Get Started <BsArrowRight />
        </Button>
        <div className="mt-2 flex w-full flex-col gap-3 text-left">
          <div className="text-lg font-semibold">Benefits</div>
          <div className="flex flex-col gap-2">
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
          </div>
        </div>
        {planType === 3 && (
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
        )}
        <em className="w-full text-left text-xs font-light">
          <sup>*</sup>+ applicable taxes
        </em>
      </div>
    </div>
  )
}

export default MembershipNewCard
