import Image from 'next/image'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import Animated from '@/components/shared/Animated'
import AiIntroImage from '@/components/AiDashboard/AiIntroImage'
import AiIntroMiniImage from '@/components/AiDashboard/AiIntroMiniImage'
export default function IntroPage() {
  return (
    <div className="flex w-full pt-16 items-center gap-20 flex-col md:flex-row">
      <Animated className="relative z-1 flex md:w-1/2 flex-col items-center">
        <Image
          src="/effects/ai-eff-1.svg"
          className="absolute right-0 z-0"
          alt=""
          width={435}
          height={640}
        />
        <div className="hidden mmd:block">
          <AiIntroImage />
        </div>
        <div className="block mmd:hidden">
          <AiIntroMiniImage />
        </div>
      </Animated>
      <div className="flex flex-col gap-8 md:w-1/2 justify-center">
        <p className="text-base md:text-5xl font-semibold leading-[130%]">
          Welcome to CryptoGrad AI
        </p>
        <p className="text-xl font-normal leading-[140%] text-white/80">
          Explore crypto education with the power of AI
        </p>
        <Button className="w-fit">
          <Link href="/CG-AI/landing">Get Started</Link>
        </Button>
      </div>
    </div>
  )
}