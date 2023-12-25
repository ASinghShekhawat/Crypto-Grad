import MembershipNewCard from './MembershipNewCard'
import MembershipPlanCard from './MembershipPlanCard'

const MembershipPlans = () => {
  return (
    <div className="relative z-1 mt-16 grid w-full grid-cols-1 gap-4 md:w-fit mmd:grid-cols-3">
      <MembershipNewCard price={199} planType={1} />
      <MembershipNewCard price={199} planType={3} />
      <MembershipNewCard price={199} planType={12} />
      {/* <MembershipPlanCard
        month={29.99}
        year={249.99}
        trial
        signals
        videos
        community
      />
      <MembershipPlanCard
        month={49.99}
        year={399.99}
        trial
        signals
        videos
        community
        goLive
        popular
      />
      <MembershipPlanCard
        month={69.99}
        year={599.99}
        trial
        signals
        videos
        aiBot
        goLive
        community
      /> */}
    </div>
  )
}

export default MembershipPlans
