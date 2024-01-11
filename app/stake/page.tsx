'use client'

import Dashboard from '@/components/Stake/Dashboard'
import Perks from '@/components/Stake/Perks'
import Stake from '@/components/Stake/Stake'
import StakeFaq from '@/components/Stake/StakeFaq'
import StakeRewards from '@/components/Stake/StakeRewards'
import Swap from '@/components/Swap/Swap'
import Link from 'next/link'
import { IoIosInformationCircleOutline } from 'react-icons/io'

export default function StakePage() {
  return (
    <div className="grid grid-cols-3 gap-8 px-4 py-8 md:px-8">
      <div className="col-span-2 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-semibold">Dashboard</div>
          <Dashboard />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-2 text-3xl font-semibold">
            <span>Perks of Staking</span>
            <div className="flex items-center gap-2 pb-1 text-sm font-light text-white/30">
              <div className="flex items-center gap-1">
                <IoIosInformationCircleOutline />
                Want Access?
              </div>
              <span className="text-themeBlue underline">Stake Now</span>
            </div>
          </div>
          <Perks />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-semibold">FAQ</div>
          <StakeFaq />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-semibold">
            For More Info Head Over To Our Telegram
          </div>
          <Link
            className="flex !h-12 min-h-[2.5rem] w-fit items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
            href="https://discord.gg/M9dNdA4FWW"
            target="_blank"
            rel="noreferrer noopener"
          >
            Join The Community
          </Link>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-8">
        <div className="col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-semibold">Stake CG Token</div>
            <Stake />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-semibold">Rewards</div>
            <StakeRewards />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-semibold">Swap CG Token</div>
            <Swap className={'!w-full'} />
          </div>
        </div>
      </div>
    </div>
  )
}
