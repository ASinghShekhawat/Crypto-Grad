'use client'

import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import JoinTheBeta from '../shared/JoinTheBets'

const HeroSectionActions = () => {
  return (
    <div className="relative z-5 mt-8 flex items-center justify-center gap-2 md:gap-4">
      <JoinTheBeta buttonText='Join Pre-Sale' />
      <a
        href="https://discord.gg/GQJTSFdTwh"
        target="_blank"
        rel="noreferrer noopener"
        className="flex aspect-square !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBlue bg-themeBlack !px-0 text-lg  font-medium transition-all hover:text-themeVioletText"
      >
        <BsDiscord className="!text-2xl" />
      </a>
      {/* <a
        href="https://twitter.com/cgradofficial"
        target="_blank"
        rel="noreferrer noopener"
        className="flex aspect-square !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBlue bg-themeBlack !px-0 text-lg  font-medium transition-all hover:text-themeVioletText"
      >
        <BsTwitter className="!text-2xl" />
      </a>
      <a
        href="https://www.instagram.com/cryptogradofficial/"
        target="_blank"
        rel="noreferrer noopener"
        className="flex aspect-square !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBlue bg-themeBlack !px-0 text-lg  font-medium transition-all hover:text-themeVioletText"
      >
        <BiLogoInstagramAlt className="!text-3xl" />
      </a> */}
    </div>
  )
}

export default HeroSectionActions
