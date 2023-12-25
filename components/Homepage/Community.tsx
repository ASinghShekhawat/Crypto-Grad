import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa'

const Community = () => {
  return (
    <div className="relative overflow-hidden">
      <Animated className="relative flex w-full flex-col items-center justify-center overflow-x-clip px-8 !pb-32 text-center md:py-20 mmd:px-16">
        <div className="relative z-1 text-lg font-medium text-themeBlue">
          Investor Backroom
        </div>
        <div className="relative z-1 text-3xl font-bold md:text-5xl">
          H1 Incubation & Investor <br /> Backroom Title Here
        </div>
        <div className="mb-8 mt-4 font-light mmd:max-w-[60%]">
          Double the joy by inviting friends to our presale! Share the
          excitement, expand our community, and enjoy exclusive referral
          rewards. More friends mean more perks - tokens, NFTs, and discounts
          await. Let's grow and thrive together at Cryptoland!
        </div>
        <Button>
          <FaDiscord className="!text-xl" /> Open Discord
        </Button>
        {/* <Image
        src="/effects/ai-eff-1.svg"
        className="absolute -bottom-64 -right-[20%] z-0 h-full object-bottom"
        alt=""
        width={635}
        height={840}
      /> */}
      </Animated>
      <Image
        className="absolute bottom-1/2 right-32 z-0 h-32 w-32 rotate-[15deg]"
        src="/Homepage/Community/communtiy (1).png"
        alt=""
        width={800}
        height={800}
      />
      <Image
        className="absolute bottom-1/2 -left-16 z-0 h-56 w-56 rotate-[26deg]"
        src="/Homepage/Community/communtiy (2).png"
        alt=""
        width={800}
        height={800}
      />
      <Image
        className="absolute -right-12 top-32 z-0 h-40 w-40 -rotate-[19deg]"
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
          <div className="flex h-64 w-full flex-col justify-between rounded-2xl bg-themeNavBlack p-8 2xl:w-[400px]">
            <div className="flex flex-col items-start text-left">
              <div className="text-3xl font-semibold">Twitter</div>
              <div className="text-sm font-light">General Announcements</div>
            </div>
            <FaTwitter className="!text-7xl !text-[#1D9BF0]" />
          </div>
          <div className="flex h-64 w-full flex-col justify-between rounded-2xl bg-themeNavBlack p-8 2xl:w-[400px]">
            <div className="flex flex-col items-start text-left">
              <div className="text-3xl font-semibold">Telegram</div>
              <div className="text-sm font-light">Live Chat</div>
            </div>
            <FaTelegramPlane className="!text-7xl !text-[#229ED9]" />
          </div>
          <div className="flex h-64 w-full flex-col justify-between rounded-2xl bg-themeNavBlack p-8 2xl:w-[400px]">
            <div className="flex flex-col items-start text-left">
              <div className="text-3xl font-semibold">Discord</div>
              <div className="text-sm font-light">
                Technical support, signals, investor . <br /> backroom and much
                more...
              </div>
            </div>
            <FaDiscord className="!text-7xl !text-[#5865F2]" />
          </div>
        </div>
      </Animated>
    </div>
  )
}

export default Community
