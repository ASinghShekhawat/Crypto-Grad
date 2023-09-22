import Image from 'next/image'
import Animated from '../shared/Animated'
import HeroSectionActions from './HeroSectionActions'

const HeroSection = () => {
  return (
    <>
      <Animated className="relative z-[1] flex flex-col items-center justify-center px-8 md:py-32 py-16">
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
      <Animated
        delay={100}
        className="relative z-0 flex h-[30vw] w-full flex-col items-center justify-center px-8 mmd:py-20 py-10"
      >
        <Image
          src="/effects/hero-eff-2.svg"
          className="absolute z-0 w-full"
          alt=""
          width={870}
          height={609}
        />
        <Image
          src="/Homepage/Hero/hero (1).png"
          className="floating absolute bottom-0 left-8 z-[1] w-1/4"
          alt=""
          width={414}
          height={430}
          data-delay={600}
        />

        <Image
          src="/Homepage/Hero/hero (2).png"
          className="floating absolute bottom-0 z-[3] w-1/3"
          alt=""
          width={566}
          height={567}
        />
        <Image
          src="/Homepage/Hero/hero (3).png"
          className="floating left-[18%] absolute bottom-0 z-[2] w-[28%]"
          alt=""
          width={462}
          height={463}
          data-delay={300}
        />
        <Image
          src="/Homepage/Hero/hero (4).png"
          className="floating right-8 absolute bottom-0 z-[1] w-1/4"
          alt=""
          width={356}
          height={372}
          data-delay={600}
        />
        <Image
          src="/Homepage/Hero/hero (5).png"
          className="floating right-[18%] absolute bottom-0 z-[2] w-[28%]"
          alt=""
          width={434}
          height={435}
          data-delay={300}
        />
      </Animated>
    </>
  )
}

export default HeroSection
