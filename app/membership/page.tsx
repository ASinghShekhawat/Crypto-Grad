import MembershipPlans from '@/components/Homepage/MembershipPlans'
import Animated from '@/components/shared/Animated'

export default function MembershipPage() {
  return (
    <Animated className="relative flex w-full flex-col items-center justify-center overflow-x-clip px-4 pt-16 text-center md:py-20 mmd:px-8">
      <div className="relative z-1 text-3xl font-bold md:text-5xl">
        Become A Member***
      </div>
      <div className="mt-4 font-light mmd:max-w-[60%]">
        An all encompassing metaverse platform offering a propriety,
        utility-backed governance token, limited{' '}
        <br className="hidden mmd:block" /> edition NFT launch, poker room and
        tournament play
      </div>
      <MembershipPlans page />
    </Animated>
  )
}
