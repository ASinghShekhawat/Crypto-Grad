import MembershipPlanCard from './MembershipPlanCard'

const MembershipPlans = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-4 w-full md:w-fit mmd:grid-cols-4 relative z-1">
      <MembershipPlanCard
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
      />
      <MembershipPlanCard
        month={129.99}
        year={999.99}
        trial
        signals
        videos
        community
        goLive
        aiBot
        vip
      />
    </div>
  )
}

export default MembershipPlans
