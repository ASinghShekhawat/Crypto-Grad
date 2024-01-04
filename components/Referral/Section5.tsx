import { ButtonType } from '@/types/buttton'
import Button from '../shared/Button'
import StakingBenefits from '../shared/StakingBenefits'
import Animated from '../shared/Animated'
import JoinTheBeta from '../shared/JoinTheBets'
import Image from 'next/image'

export default function Section5() {
  return (
    <Animated className="flex flex-col items-center justify-center">
      <div className="relative z-1 flex flex-col items-center justify-center px-4 pt-16 md:pt-32 mmd:px-16">
        <div className="relative z-10 pb-8 pt-4 text-center text-3xl font-bold md:text-5xl">
          Entering into CG Ecosystem
        </div>
        <div className="text-center font-light mmd:w-3/5">
          Stake the token for rewards, locking in gains and maximizing your
          investment potential. Your path to growth starts here!
        </div>
        <div className="grid max-w-[1200px] grid-cols-1 gap-4 py-8 mmd:grid-cols-3">
          <div className="flex flex-col items-center justify-between rounded-lg bg-themeBgBlack pt-8">
            <Image
              src="/Homepage/Hero/stake1.svg"
              alt=""
              width={300}
              height={300}
              className="h-[40%] max-h-[190px] object-contain"
            />
            <div className="flex flex-col gap-2 p-8">
              <div className="text-center text-xl">
                Get the Token <br />
                in the Pre-Sale!
              </div>
              <div className="text-center text-sm text-themeLightGrey">
                Secure tokens at a significantly better early bird price by
                participating in this exclusive early pre-sale.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between overflow-hidden rounded-lg bg-themeBgBlack pt-8">
            <Image
              src="/Homepage/Hero/stake3.svg"
              alt=""
              width={1219}
              height={634}
              className="h-full max-h-[190px] object-cover"
            />
            <div className="flex flex-col gap-2 p-8">
              <div className="text-center text-xl">
                Stake the Token <br />
                for a Set Period of Time
              </div>
              <div className="text-center text-sm text-themeLightGrey">
                Stake $CG for rewards, locking in gains and maximizing your
                investment potential. Your path to growth starts here!
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between overflow-hidden rounded-lg bg-themeBgBlack">
            <Image
              src="/Homepage/Hero/stake2.svg"
              alt=""
              className="h-full object-contain"
              width={792}
              height={402}
            />
            <div className="flex flex-col gap-2 p-8">
              <div className="text-center text-xl">
                Super Exclusive Reward <br />
                Comes With Patience
              </div>
              <div className="text-center text-sm text-themeLightGrey">
                Stake patiently, unlock exclusives: CG AI tools, resources,
                courses, and more. Elevate your rewards, embrace the
                extraordinary.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button type={ButtonType.SECONDARY} className="mt-8">
        Know More
      </Button>
    </Animated>
  )
}
