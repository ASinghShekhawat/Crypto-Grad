'use client'

import Image from 'next/image'
import Button from '@/components/shared/Button'
import useWallet from '@/hooks/useWallet'

export default function UnlockPower() {
  const { connectWallet } = useWallet()

  return (
      <div className="w-full flex flex-col justify-center text-2xl md:text-5xl gap-4 font-bold">
        Unlock the full power of CryptoGrad AI
        <p className="text-xl font-normal leading-[140%] text-white/80">
          Something beyond human limits
        </p>
        <div className="flex flex-col gap-6 py-8">
          <div className="flex gap-1 text-sm md:text-xl font-bold text-white/80">
            <Image
              className="h-6 w-6 md:h-8 md:w-8"
              src="/landing/tick.png"
              alt=""
              width={800}
              height={800}
            />
            Turn Ideas into Decision with AI
          </div>
          <div className="flex gap-1 text-sm md:text-xl font-bold text-white/80">
            <Image
              className="h-6 w-6 md:h-8 md:w-8"
              src="/landing/tick.png"
              alt=""
              width={800}
              height={800}
            />
            Access Live Market Data
          </div>
          <div className="flex gap-1 text-sm md:text-xl font-bold text-white/80">
            <Image
              className="h-6 w-6 md:h-8 md:w-8"
              src="/landing/tick.png"
              alt=""
              width={800}
              height={800}
            />
            Expert Curated Crypto Knowledge
          </div>
        </div>
        <div className="flex h-16 w-full md:w-3/5 items-center rounded-lg bg-[#1D1E28] px-4 text-base md:text-xl text-slate-300">
          Try 7 days for FREE, then $129.99/month
        </div>
        <div className="flex h-16 gap-2 w-full md:w-3/5 items-center justify-between rounded-lg bg-[#1D1E28] px-4 text-slate-300">
          <div className="flex items-center gap-4 text-base md:text-xl font-semibold">
            Connect Wallet
          </div>
          <div className="rounded-full border border-[#6754F8] bg-black px-4 py-2 text-xs font-light">
            Recommended
          </div>
        </div>
        <Button className="w-full md:w-fit font-normal md:font-bold" onClick={connectWallet}>Confirm</Button>
      </div>
  )
}
