import Image from 'next/image'
import Button from '../shared/Button'
import { BsArrowRightShort } from 'react-icons/bs'
import { HiOutlineStop } from 'react-icons/hi'
import { ButtonType } from '@/types/buttton'
import Animated from '../shared/Animated'

const AiSection5Image = () => {
  return (
    <div className="z-2 w-full scale-50 md:scale-100 mmd:scale-50 xl:scale-75 2xl:scale-100">
      <div className="relative mx-auto w-fit">
        <Image
          src="/Homepage/AiSection/ai2.png"
          width={505}
          height={582}
          alt=""
          className="relative z-0 mx-auto px-12"
        />
        <Animated
          delay={200}
          className="absolute right-0 top-[2%] z-1 flex w-fit flex-col gap-2 rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-xs backdrop-blur-sm"
        >
          <div className="font-semibold uppercase text-themeVioletText">
            📌 Daily Nuggets of Wisdom
          </div>
          <div className="text-themeBorder">
            Choose your leverage wisely with the power of AI.
          </div>
        </Animated>
      </div>
    </div>
  )
}

export default AiSection5Image
