import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa'

const Community = () => {
  return (
    <div className="relative overflow-hidden">
      <Animated className="relative flex w-full flex-col items-center justify-center overflow-x-clip px-8 !pb-32 text-center md:py-20 mmd:px-16">
        <div className="relative z-1 text-lg font-medium text-themeBlue">
          CryptoGrad Incubator Lab
        </div>
        <div className="relative z-1 text-3xl font-bold md:text-5xl">
          Nurturing Web3 Innovation
        </div>
        <div className="mb-8 mt-4 font-light mmd:max-w-[60%]">
          Cryptograd&apos;s dedicated space where aspiring blockchain
          enthusiasts and entrepreneurs come together to incubate their
          groundbreaking ideas. This collaborative ecosystem provides a
          supportive environment for individuals to explore, develop, and launch
          their blockchain projects, fostering innovation and driving the future
          of the blockchain industry.
        </div>
        <a
          href="https://discord.gg/M9dNdA4FWW"
          target="_blank"
          rel="noreferrer noopener"
          className="flex min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          <FaDiscord className="!text-xl" /> Open Discord
        </a>
        {/* <Image
        src="/effects/ai-eff-1.svg"
        className="absolute -bottom-64 -right-[20%] z-0 h-full object-bottom"
        alt=""
        width={635}
        height={840}
      /> */}
      </Animated>
      <Image
        className="absolute bottom-1/2 right-32 z-0 hidden h-32 w-32 rotate-[15deg] md:block"
        src="/Homepage/Community/communtiy (1).png"
        alt=""
        width={800}
        height={800}
      />
      <Image
        className="absolute -left-16 bottom-1/2 z-0 hidden h-56 w-56 rotate-[26deg] md:block"
        src="/Homepage/Community/communtiy (2).png"
        alt=""
        width={800}
        height={800}
      />
      <Image
        className="absolute -right-12 top-32 z-0 hidden h-40 w-40 -rotate-[19deg] md:block"
        src="/Homepage/Community/communtiy (3).png"
        alt=""
        width={800}
        height={800}
      />
      <Image
        className="absolute top-0 z-0 h-full w-full"
        src="/Homepage/Community/ellipse.svg"
        width={1920}
        height={1920}
        alt=""
      />
      <Animated className="relative flex w-full flex-col items-center justify-center overflow-x-clip px-8 pb-20 text-center md:py-20 mmd:px-16">
        <div className="relative z-1 text-3xl font-bold capitalize md:text-5xl">
          join a passionate, <br />
          global community of crypto
        </div>
        <div className="relative z-1 mt-16 grid w-fit grid-cols-1 gap-4 mmd:grid-cols-3">
          <div className="flex md:h-64 h-48 w-full flex-col justify-between rounded-2xl bg-themeNavBlack p-8 2xl:w-[400px]">
            <div className="flex flex-col items-start text-left">
              <div className="text-3xl font-semibold">Twitter</div>
              <div className="text-sm font-light">General Announcements</div>
            </div>
            <FaTwitter className="!text-4xl md:!text-7xl !text-[#1D9BF0]" />
          </div>
          <div className="flex md:h-64 h-48 w-full flex-col justify-between rounded-2xl bg-themeNavBlack p-8 2xl:w-[400px]">
            <div className="flex flex-col items-start text-left">
              <div className="text-3xl font-semibold">Telegram</div>
              <div className="text-sm font-light">Live Chat</div>
            </div>
            <FaTelegramPlane className="!text-4xl md:!text-7xl !text-[#229ED9]" />
          </div>
          <div className="flex md:h-64 h-48 w-full flex-col justify-between rounded-2xl bg-themeNavBlack p-8 2xl:w-[400px]">
            <div className="flex flex-col items-start text-left">
              <div className="text-3xl font-semibold">Discord</div>
              <div className="text-sm font-light">
                Technical support, signals, investor . <br /> backroom and much
                more...
              </div>
            </div>
            <FaDiscord className="!text-4xl md:!text-7xl !text-[#5865F2]" />
          </div>
        </div>
      </Animated>
    </div>
  )
}

export default Community
