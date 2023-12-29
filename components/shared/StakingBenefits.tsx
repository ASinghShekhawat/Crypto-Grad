import Image from 'next/image'
import Animated from './Animated'
import JoinTheBeta from './JoinTheBets'

export default function StakingBenefits({
  buttonText,
}: {
  buttonText?: string
}) {
  return (
    <Animated className="relative z-1 flex flex-col items-center justify-center px-8 pt-16 md:pt-32 mmd:px-16">
      <div className="relative z-1 text-lg font-medium text-themeBlue">
        Staking Benefits
      </div>
      <div className="relative z-10 pb-8 pt-4 text-center text-3xl font-bold md:text-5xl">
        Obtain, Stake, Unlock Rewards
      </div>
      <JoinTheBeta buttonText={buttonText} />
      <div className="grid max-w-[1200px] grid-cols-1 gap-4 py-8 mmd:grid-cols-3">
        <div className="flex flex-col items-center justify-between rounded-lg bg-themeBgBlack pt-8">
          <Image
            src="/Homepage/Hero/stake1.svg"
            alt=""
            width={300}
            height={300}
            className="h-full object-contain"
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
            src="/Homepage/Hero/stake3.png"
            alt=""
            width={1219}
            height={634}
            className="h-full object-cover"
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
        <div className="flex flex-col items-center justify-between overflow-hidden rounded-lg bg-themeBgBlack pt-8">
          <Image
            src="/Homepage/Hero/stake2.png"
            alt=""
            className="ml-4 h-full object-cover"
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
    </Animated>
  )
}
