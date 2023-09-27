import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'

const LiveEducator = () => {
  return (
    <Animated className="w-ful relative z-1 flex flex-col items-center gap-8 px-8 mmd:px-16 py-20 md:min-w-fit mmd:flex-row">
      <div className="relative z-1 w-full">
        <Image
          src="/Homepage/LiveEducator/liveEdu.webp"
          alt=""
          width={2448}
          height={2416}
          className="w-full object-contain"
        />
      </div>
      <Image
        src="/effects/ai-eff-1.svg"
        className="absolute -bottom-64 -left-[20%] z-0 h-full object-bottom"
        alt=""
        width={635}
        height={840}
      />
      <div className="flex w-full flex-col gap-8">
        <div className="whitespace-nowrap text-3xl font-bold md:text-5xl">
          <span className="text-themeBorderBlue">With AI, </span>
          It&apos;s possible
        </div>
        <div className="flex flex-col gap-2 text-lg">
          <div className="flex gap-2">
            <span>📈 </span>Receive up-to-the-minute market analysis and trends
          </div>
          <div className="flex gap-2">
            <span>💬 </span>Engage in live Q&A sessions and discussions
          </div>
          <div className="flex gap-2">
            <span>📱 </span>Get started with CryptoGrad suggested applications
            and accessories
          </div>
        </div>
      </div>
    </Animated>
  )
}

export default LiveEducator
