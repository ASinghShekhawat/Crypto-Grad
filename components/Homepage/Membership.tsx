import Image from 'next/image'
import Animated from '../shared/Animated'
import MembershipPlans from './MembershipPlans'

const Membership = () => {
  return (
    <Animated className="relative flex w-full flex-col items-center justify-center overflow-x-clip px-8 text-center md:py-20 mmd:px-16">
      <div className="relative z-1 text-lg font-medium text-themeBlue">
        Platform Goes Live Once Presale is Concluded
      </div>
      <div className="relative z-1 text-3xl font-bold md:text-5xl">
        Become A Member
      </div>
      <div className="mt-4 mmd:max-w-[60%] font-light">
        An all encompassing metaverse platform offering a propriety,
        utility-backed governance token, limited edition NFT launch, poker room
        and tournament play
      </div>
      <MembershipPlans />
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
