import Image from 'next/image'
import Button from '../shared/Button'
import { BsArrowRightShort } from 'react-icons/bs'
import { HiOutlineStop } from 'react-icons/hi'
import { ButtonType } from '@/types/buttton'
import Animated from '../shared/Animated'

const AiSectionImage = () => {
  return (
    <div className="z-2 w-full scale-50 md:scale-100 mmd:scale-50 xl:scale-75 2xl:scale-100">
      <div className="relative mx-auto w-fit">
        <Image
          src="/Homepage/AiSection/section-2.png"
          width={320}
          height={579}
          alt=""
          className="relative z-0 mx-auto px-12"
        />
        <Animated delay={200} className="absolute -left-[45%] top-[17%] z-1 flex w-fit flex-col gap-2 rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-xs backdrop-blur-sm">
          <div className="font-semibold uppercase text-themeVioletText">
            📌 Daily Nuggets of Wisdom
          </div>
          <div className="text-themeBorder">
            Choose your leverage wisely with <br /> the power of AI.
          </div>
        </Animated>
        <Animated delay={300} className="absolute -right-[60%] top-[5%] flex w-fit gap-2 rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-xs backdrop-blur-sm">
          <div className="flex flex-col items-start gap-2">
            <div>
              Refine and generate prompts <br /> using CG AI
            </div>
            <Button className="!min-h-fit !gap-1 !px-4 !py-2 !text-xs !font-light">
              Get Started <BsArrowRightShort className="text-lg" />
            </Button>
          </div>
          <Image
            src="/Homepage/AiSection/ai-sec.png"
            width={523}
            height={374}
            className="h-16 w-fit -rotate-[16deg] object-contain"
            alt=""
          />
        </Animated>
        <Animated delay={400} className="absolute -right-[24%] top-[44%] flex w-fit items-center gap-2 rounded-full border-2 border-themeBlue bg-themeNavBlack/40 py-1 pl-2 pr-4 text-xs backdrop-blur-sm">
          <HiOutlineStop className="text-xl text-themeBlue" /> Stop Regenerating
        </Animated>
        <Animated delay={500} className="absolute -left-[25%] top-[68%] flex w-fit flex-col rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-xs backdrop-blur-sm">
          <div>
            Trade using Maslow&apos;s <br /> upper high strategy
          </div>
          <span className="my-2 -rotate-[21deg] text-5xl">⚓</span>
        </Animated>
        <Animated delay={600} className="absolute -right-[59%] top-[69%] flex w-fit flex-col items-center gap-2 rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-center text-xs backdrop-blur-sm">
          <div>Choose your trading style</div>
          <div className="flex justify-center gap-1">
            <Button className="!min-h-fit !gap-1 !px-3 !py-2 !text-xs !font-light">
              Safe
            </Button>
            <Button
              type={ButtonType.SECONDARY}
              className="!min-h-fit !gap-1 !px-3 !py-2 !text-xs !font-light"
            >
              Balanced
            </Button>
            <Button
              type={ButtonType.SECONDARY}
              className="!min-h-fit !gap-1 !px-3 !py-2 !text-xs !font-light"
            >
              Aggresive
            </Button>
          </div>
        </Animated>
      </div>
    </div>
  )
}

export default AiSectionImage