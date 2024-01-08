import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import Link from 'next/link'

const Discord = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center px-4 md:min-w-fit md:py-20 mmd:flex-row mmd:px-16">
      <div className="flex w-full flex-col items-center gap-8 mmd:items-start">
        <div className="text-3xl font-bold md:text-5xl">
          <span className="text-themeBorderBlue">Discord Synergy</span>
        </div>
        <div className="flex flex-col items-center gap-4 text-center text-lg mmd:items-start mmd:text-left">
          <div>⚙️ Access real-time trading signals for informed decisions.</div>
          <div>
            📈 Join a vibrant crypto community for collaboration and insights.
          </div>
          <div>✨ Enhance your crypto journey with multiple AI tools </div>
        </div>
        <Link
          href="https://discord.gg/GQJTSFdTwh"
          target="_blank"
          rel="noreferrer noopener"
          className="flex !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          Get Started
        </Link>
      </div>
      <div className="w-3/4 md:w-full">
        <Image
          src="/Homepage/3.gif"
          width={365}
          height={894}
          alt=""
          className="relative z-0 mx-auto px-12 py-8 md:pl-12"
        />
      </div>
    </Animated>
  )
}

export default Discord
