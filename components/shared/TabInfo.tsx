import Image from 'next/image'
import Animated from './Animated'

export default function TabInfo() {
  return (
    <Animated className="relative z-5 flex flex-col items-center justify-center gap-16 px-2 pt-8 md:px-4 mmd:px-16">
      <div className="flex w-full items-center justify-between rounded-full bg-themeBlackBg p-2 font-light md:w-fit md:justify-center">
        <button
          className={`rounded-full bg-themeBlackDeep px-2.5 py-2 text-xs md:text-base`}
        >
          Chat Genius
        </button>
        <button
          className={`rounded-full px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base`}
        >
          Trade Analyzer
        </button>
        <button
          className={`rounded-full px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base`}
        >
          Contract Insight
        </button>
        <button
          className={`rounded-full px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base`}
        >
          Crypto Buzz
        </button>
      </div>
      <Image
        src="/Homepage/Hero/HeroMain.svg"
        className="w-full"
        width={1312}
        height={743}
        alt=""
      />
    </Animated>
  )
}
