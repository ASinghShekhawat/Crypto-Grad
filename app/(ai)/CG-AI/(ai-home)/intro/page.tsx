import Image from 'next/image'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import Animated from '@/components/shared/Animated'
import AiIntroImage from '@/components/Homepage/AiIntroImage'
export default function IntroPage() {
  return (
    <div className="flex w-full pt-16 items-center gap-20 flex-col md:flex-row">
      <Animated className="relative z-1 flex w-1/2 flex-col items-center">
        <Image
          src="/effects/ai-eff-1.svg"
          className="absolute right-0 z-0"
          alt=""
          width={435}
          height={640}
        />
        <div>
          <AiIntroImage />
        </div>
      </Animated>
      <div className="flex flex-col gap-8 w-1/2">
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

{
  /* <div className="relative flex w-3/5 justify-center">
<Image
  className="z-1 h-96 w-48"
  src="/Homepage/AiSection/section-2.png"
  alt=""
  width={800}
  height={800}
/> */
}
{
  /* <Image
  className="h-24 w-64 absolute left-96 top-8 z-2"
  src="/landing/analysing-trades.png"
  alt=""
  width={800}
  height={800}
/>
<Image
  className="h-24 w-64 absolute left-0 top-16 z-2"
  src="/landing/daily-nuggets.png"
  alt=""
  width={800}
  height={800}
/>
 <Image
  className="h-24 w-32 absolute left-28 top-64 z-2"
  src="/landing/volume.png"
  alt=""
  width={800}
  height={800}
/>
 <Image
  className="h-56 w-56 absolute left-24 top-24 z-0"
  src="/landing/fingerprint.png"
  alt=""
  width={800}
  height={800}
/>
 <Image
  className="h-20 w-48 absolute right-8 top-64 z-2"
  src="/landing/choose-trading.png"
  alt=""
  width={800}
  height={800}
/>
 <Image
  className="h-3 w-20 absolute right-40 top-44 z-2"
  src="/landing/stop-generating.png"
  alt=""
  width={800}
  height={800}
/> */
}
{
  /* </div>
<div className="flex w-2/5 flex-col gap-8">
<p className="text-5xl font-semibold leading-[130%]">
  Welcome to <br />
  CryptoGrad AI
</p>
<p className="text-xl font-normal leading-[140%] text-white/80">
  Explore crypto education with the power of AI
</p>
<Button className="w-fit">
  <Link
    href="/CG-AI/landing"
  >
    Get Started
  </Link>
</Button>
</div> */
}
