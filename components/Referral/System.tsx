import Image from 'next/image'
import Animated from '../shared/Animated'
import SystemChart from './SystemChart'

export default function System() {
  return (
    <Animated className="flex flex-col items-center justify-center md:gap-12 px-8 pt-16 md:px-16 md:pt-24">
      <div className="flex flex-col items-center justify-center gap-4 md:pb-12">
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
          Layered referral System
        </div>
        <div className="text-center font-light mmd:w-3/5">
          Stake the token for rewards, locking in gains and maximizing your
          investment potential. Your path to growth starts here!
        </div>
      </div>
      {/* <Image
        src="/Referral/system.svg"
        width={1240}
        height={668}
        alt="referral-system"
      /> */}
      <SystemChart />
      <span className="text-center text-xs font-light text-white/40">
        Terms & Conditions Apply*
      </span>
    </Animated>
  )
}
