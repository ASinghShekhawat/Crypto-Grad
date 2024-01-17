import Animated from '../shared/Animated'
import GrowthActions from './GrowthAction'
import GrowthImage from './GrowthImage'

const Growth = () => {
  return (
    <Animated
      id="growth"
      className="relative z-1 flex w-full flex-col items-center gap-8 px-4 py-20 md:min-w-fit mmd:flex-row mmd:px-16"
    >
      <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
        <div className="relative z-1 text-xl font-semibold text-themeBlue">
          Refer & Earn
        </div>
        <div className="whitespace-nowrap pt-4 text-3xl font-bold md:text-5xl">
          Double the Joy: <br /> Refer & Earn!
        </div>
        <div className="mb-8 mt-6 font-light text-white/80 mmd:max-w-[28rem]">
          Double the joy by inviting friends to our presale! Share the
          excitement, expand our community, and enjoy exclusive referral
          rewards. More friends mean more perks - tokens, NFTs, and discounts
          await. Let&apos;s grow and thrive together at Cryptoland!
        </div>
        <GrowthActions />
      </div>
      <GrowthImage />
    </Animated>
  )
}

export default Growth
