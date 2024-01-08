import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import Link from 'next/link'

const LargeToken = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center px-4 md:min-w-fit md:py-20 mmd:flex-row mmd:px-16">
      <Image
        src="/effects/hero-eff-2.svg"
        className="absolute -top-[5%] left-0 z-0 w-full rotate-180 scale-y-[-1]"
        alt=""
        width={870}
        height={609}
      />
      <div className="relative z-1 flex w-full items-center justify-center">
        <Image
          src="/Homepage/LargeToken/largeToken.png"
          className="object-contain"
          alt=""
          width={489}
          height={492}
        />
      </div>
      <div className="relative z-1 flex w-full flex-col items-center gap-8 mmd:items-start">
        <div className="mt-2 text-center text-3xl font-bold md:text-5xl mmd:text-left">
          Cryptograd Presale: <br /> Secure Your Tokens Now!
        </div>
        <div className="text-center font-light mmd:text-left">
          Discover CG Token: Where Cutting-Edge AI Meets Blockchain{' '}
          <br className="hidden mmd:block" /> Excellence. Join Our Thriving
          Community and Discover the Power <br className="hidden mmd:block" />{' '}
          of AI-Driven Crypto Mastery Today
        </div>
        <Link href={'/presale'} className="!h-12 bg-gradient-to-r justify-center flex items-center gap-2 from-themeViolet to-themeBlue hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey transition-all duration-700 rounded-lg md:px-6 px-4 min-h-[2.5rem] font-semibold text-lg">Buy Now</Link>
      </div>
    </Animated>
  )
}

export default LargeToken
