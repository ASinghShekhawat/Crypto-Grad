import Image from 'next/image'
import Animated from '../shared/Animated'
import MembershipPlans from './MembershipPlans'

const Membership = () => {
  return (
    <Animated className="relative overflow-x-clip flex flex-col items-center justify-center w-full px-8 py-20 text-center mmd:px-16">
      <div className="text-3xl font-bold md:text-5xl relative z-1">Become A Member</div>
      <div className="mt-4">
        Embark on a transformative journey within our AI-powered learning
        platform, unlocking invaluable trading{' '}
        <br className="hidden mmd:block" />
        insights and exclusive resources upon membership. Join now!
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
