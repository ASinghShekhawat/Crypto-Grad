import Image from 'next/image'
import Animated from '../shared/Animated'
import HeroSectionActions from './HeroSectionActions'
import HeroSectionHoveringNfts from './HeroSectionHoveringNfts'

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
      <HeroSectionHoveringNfts bg />
    </>
  )
}

export default HeroSection
