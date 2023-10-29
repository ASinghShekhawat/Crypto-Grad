import Image from 'next/image'
import Animated from '../shared/Animated'
import AiSectionImage from './AiSectionImage'

const AiSection = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center px-8 md:min-w-fit md:py-20 mmd:flex-row mmd:px-16">
      <Image
        src="/effects/ai-eff-1.svg"
        className="absolute right-0 z-0"
        alt=""
        width={435}
        height={640}
      />
      <div>
        <div className="relative z-1 text-lg font-medium text-themeBlue">
          Something Beyond Human Limits
        </div>
        <div className="mt-2 whitespace-nowrap text-3xl font-bold md:text-5xl">
          Your AI, 🧠 Your trading <br /> partner
        </div>
      </div>
      <AiSectionImage />
    </Animated>
  )
}

export default AiSection
