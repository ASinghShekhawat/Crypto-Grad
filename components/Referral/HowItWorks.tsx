import Animated from '../shared/Animated'

export default function HowItWorks() {
  return (
    <Animated className="hidden flex-col items-center justify-center gap-12 px-8 pt-16 md:px-16 md:pt-24 mmd:flex">
      <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
        How it works
      </div>
      <div className="grid w-full grid-cols-3 gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-themeBorderBlue bg-gradient-to-br from-themeViolet to-themeBorderBlue">
            <span className="text-xl font-semibold">1</span>
          </div>
          <div className="text-center text-lg font-semibold">
            Connect Wallet
          </div>
          <div className="text-center text-sm font-light md:max-w-[15rem]">
            Secure tokens at a significantly better early bird price by
            participating in this exclusive early pre-sale.
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-themeBorderBlue">
            <span className="text-xl font-semibold">2</span>
          </div>
          <div className="text-center text-lg font-semibold">
            Generate Referral Link
          </div>
          <div className="text-center text-sm font-light md:max-w-[15rem]">
            Stake the token for rewards, locking in gains and maximizing your
            investment potential. Your path to growth starts here!
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-themeBorderBlue">
            <span className="text-xl font-semibold">3</span>
          </div>
          <div className="text-center text-lg font-semibold">
            Earn Upto 15% Commission
          </div>
          <div className="text-center text-sm font-light md:max-w-[15rem]">
            Stake patiently, unlock exclusives—NFTs, resources, courses, and
            more. Elevate your rewards, embrace the extraordinary.
          </div>
        </div>
      </div>
    </Animated>
  )
}
