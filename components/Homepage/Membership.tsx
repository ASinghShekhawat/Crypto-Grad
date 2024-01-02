import Image from 'next/image'
import Animated from '../shared/Animated'
import MembershipPlans from './MembershipPlans'

const Membership = () => {
  return (
    <Animated className="relative flex w-full flex-col items-center justify-center overflow-x-clip px-4 pt-16 text-center md:py-20 mmd:px-8">
      <div className="relative z-1 text-lg font-medium text-themeBlue">
        Platform Goes Live Once Presale is Concluded
      </div>
      <div className="relative z-1 text-3xl font-bold md:text-5xl">
        Become A Member
      </div>
      <div className="mt-4 font-light mmd:max-w-[60%]">
        All facilitated by a single native token staking. Experience the
        education and guidance in crypto in an unparalleled way.
      </div>
      <MembershipPlans />
      <div className="mx-auto mt-4 w-full max-w-[900px] px-4 text-left text-xs font-light">
        Disclaimer: All prices given are in USDT, user will have to stake a
        minimum of $129.99 worth of CryptoGrad Native Tokens to get access to
        features given above
      </div>
      <Image
        src="/effects/ai-eff-1.svg"
        className="absolute -bottom-64 -right-[20%] z-0 h-full object-bottom"
        alt=""
        width={635}
        height={840}
      />
    </Animated>
  )
}

export default Membership
