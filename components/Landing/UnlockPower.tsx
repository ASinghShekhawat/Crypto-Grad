'use client'

import Image from 'next/image'
import Button from '@/components/shared/Button'
import useWallet from '@/hooks/useWallet'

export default function UnlockPower() {
  const { connectWallet } = useWallet()

  return (
      <div className="w-full flex flex-col justify-center gap-3 text-5xl font-bold">
        Unlock the full power of CryptoGrad AI
        <p className="text-xl font-normal leading-[140%] text-white/80">
          Something beyond human limits
        </p>
        <div className="flex flex-col gap-6 py-8">
          <div className="flex gap-1 text-xl font-bold">
            <Image
              className="h-8 w-8"
              src="/landing/tick.png"
              alt=""
              width={800}
              height={800}
            />
            Turn Ideas into Decision with AI
          </div>
          <div className="flex gap-1 text-xl font-bold">
            <Image
              className="h-8 w-8"
              src="/landing/tick.png"
              alt=""
              width={800}
              height={800}
            />
            Access Live Market Data
          </div>
          <div className="flex gap-1 text-xl font-bold">
            <Image
              className="h-8 w-8"
              src="/landing/tick.png"
              alt=""
              width={800}
              height={800}
            />
            Expert Curated Crypto Knowledge
          </div>
        </div>
        <div className="flex h-16 w-3/5 items-center rounded-lg bg-[#1D1E28] px-4 text-xl text-slate-300">
          Try 7 days for FREE, then $129.99/month
        </div>
        <div className="flex h-16 w-3/5 items-center justify-between rounded-lg bg-[#1D1E28] px-4 text-xl text-slate-300">
          <div className="flex items-center gap-4 text-xl font-semibold">
            Connect Wallet
          </div>
          <div className="rounded-full border border-[#6754F8] bg-black px-4 py-2 text-xs font-light">
            Recommended
          </div>
        </div>
        <Button className="w-fit" onClick={connectWallet}>Confirm</Button>
      </div>
  )
}
