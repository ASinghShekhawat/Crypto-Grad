import Animated from '../shared/Animated'
import Button from '../shared/Button'
import Calculator from './Calculator'

export default function Hero() {
  return (
    <Animated className="relative z-1 flex flex-col items-center justify-center gap-16 bg-gradient-to-b from-[#6754f82b] via-transparent to-transparent px-4 pb-0 pt-16 md:from-transparent md:pt-24 mmd:flex-row mmd:px-16">
      <div className="flex w-full flex-col text-left">
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
          Refer & Earn
        </div>
        <div className="z-10 text-center font-light text-white/80">
          Empower your network and boost your crypto gains! Secure your
          personalized affiliate link today and start sharing the wealth. Join
          the referral revolution and watch as your network turns into a
          rewarding crypto community!
        </div>
        <div className="flex w-full justify-center">
          <Button className="mt-4 h-12 w-fit !font-normal">
            Get your affiliate link
          </Button>
        </div>
      </div>
      <Calculator />
    </Animated>
  )
}
