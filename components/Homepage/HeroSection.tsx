import Image from 'next/image'
import Animated from '../shared/Animated'
import HeroSectionActions from './HeroSectionActions'
import JoinTheBeta from '../shared/JoinTheBets'
import BackedBy from '../shared/BackedBy'

const HeroSection = () => {
  return (
    <>
      <Animated className="relative z-1 flex flex-col items-center justify-center px-8 py-16 md:py-32 mmd:px-16">
        <Image
          src="/effects/hero-eff-1.svg"
          className="absolute z-0"
          alt=""
          width={870}
          height={609}
        />
        <Image
          src="/effects/hero-eff-2.svg"
          className="absolute right-0 top-0 z-0 block w-full md:hidden"
          alt=""
          width={870}
          height={609}
        />
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
          Your Solution To Everything Crypto
        </div>
        <div className="z-10 text-center font-light">
          All facilitated by a single game-changing platform. Experience the{' '}
          <br className="hidden md:block" />
          revolution of blockchain in an unparalleled way.
        </div>
        <HeroSectionActions />
      </Animated>
      {/* <HeroSectionHoveringNfts bg /> */}
      <Animated className="relative z-5 flex flex-col items-center justify-center gap-16 px-8 mmd:px-16">
        <div className="flex items-center justify-center rounded-full bg-themeBlackBg p-2 font-light">
          <button className={`rounded-full md:text-base text-xs bg-themeBlackDeep px-4 py-2`}>
            CG AI
          </button>
          <button className={`rounded-full md:text-base text-xs px-4 py-2`}>NFT&apos;s</button>
          <button className={`rounded-full md:text-base text-xs px-4 py-2`}>
            Discord Community
          </button>
          <button className={`rounded-full md:text-base text-xs px-4 py-2`}>CoursesI</button>
        </div>
        <Image
          src="/Homepage/Hero/HeroMain.svg"
          className="w-full"
          width={1312}
          height={743}
          alt=""
        />
      </Animated>
      <BackedBy />
      <Animated className="relative z-1 flex flex-col items-center justify-center px-8 py-16 md:py-32 mmd:px-16">
        <div className="relative z-1 text-lg font-medium text-themeBlue">
          Staking Benefits
        </div>
        <div className="relative z-10 py-8 text-center text-3xl font-bold md:text-5xl">
          Obtain, Stake, Unlock Rewards
        </div>
        <JoinTheBeta />
        <div className="grid grid-cols-1 gap-4 py-8 mmd:grid-cols-3">
          <div className="flex flex-col items-center justify-between rounded-lg bg-themeBgBlack pt-8">
            <Image
              src="/Homepage/Hero/stake1.svg"
              alt=""
              width={300}
              height={300}
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
            />
            <div className="flex flex-col gap-2 p-8">
              <div className="text-center text-xl">
                Stake the Token <br />
                for a Set Period of Time
              </div>
              <div className="text-center text-sm text-themeLightGrey">
                Stake the token for rewards, locking in gains and maximizing
                your investment potential. Your path to growth starts here!
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between overflow-hidden rounded-lg bg-themeBgBlack pt-8">
            <Image
              src="/Homepage/Hero/stake2.png"
              alt=""
              className="ml-4"
              width={792}
              height={402}
            />
            <div className="flex flex-col gap-2 p-8">
              <div className="text-center text-xl">
                Super Exclusive Reward <br />
                Comes With Patience
              </div>
              <div className="text-center text-sm text-themeLightGrey">
                Stake patiently, unlock exclusives—NFTs, resources, courses, and
                more. Elevate your rewards, embrace the extraordinary.
              </div>
            </div>
          </div>
        </div>
      </Animated>
    </>
  )
}

export default HeroSection
