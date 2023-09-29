'use client'

import { ButtonType } from '@/types/buttton'
import Button from '../shared/Button'
import { BsTelegram, BsTwitter } from 'react-icons/bs'
import { BiLogoInstagramAlt } from 'react-icons/bi'

const GrowthActions = () => {
  return (
    <div className="relative z-5 mt-8 flex items-center gap-2 md:gap-4">
      <Button
        // onClick={() => {}}
        className="!h-12"
      >
        <BsTelegram className="!text-2xl" /> Open Telegram
      </Button>
      <Button className="aspect-square !h-12 !px-0" type={ButtonType.SECONDARY}>
        <BsTwitter className="!text-2xl" />
      </Button>
      <Button className="aspect-square !h-12 !px-0" type={ButtonType.SECONDARY}>
        <BiLogoInstagramAlt className="!text-3xl" />
      </Button>
    </div>
  )
}

export default GrowthActions
