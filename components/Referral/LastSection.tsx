import Image from 'next/image'
import Animated from '../shared/Animated'
import AiSectionImage from '../Homepage/AiSectionImage'
import { BsDiscord } from 'react-icons/bs'

const LastSection = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center px-4 pt-20 md:min-w-fit mmd:flex-row mmd:px-16">
      <div className="flex flex-col items-center mmd:items-start">
        <div className="relative z-1 text-center text-lg font-medium text-themeBlue mmd:text-left">
          Embrace Growth
        </div>
        <div className="mt-2 whitespace-nowrap text-center text-3xl font-bold md:text-5xl mmd:text-left">
          Be a Part of <br /> Something Special
        </div>
        <div className="mb-8 mt-4 text-center text-white/80 mmd:w-96 mmd:text-left">
          Step into a space where ideas flourish, like minds connect, and
          inspiration knows no bounds. Join us now!
        </div>
        <a
          href="https://discord.gg/M9dNdA4FWW"
          target="_blank"
          rel="noreferrer noopener"
          className="flex !h-12 min-h-[2.5rem] w-fit mb-16 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          <BsDiscord className="!text-2xl" /> Open Discord
        </a>
      </div>
      <AiSectionImage />
    </Animated>
  )
}

export default LastSection
