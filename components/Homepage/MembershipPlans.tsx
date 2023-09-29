import MembershipPlanCard from './MembershipPlanCard'

const MembershipPlans = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-4 w-full md:w-fit mmd:grid-cols-4 relative z-1">
      <MembershipPlanCard
        month={49.99}
        year={549.99}
        trial
        signals
        videos
        community
      />
      <MembershipPlanCard
        month={89.99}
        year={999.99}
        trial
        signals
        videos
        community
        goLive
        popular
      />
      <MembershipPlanCard
        month={129.99}
        year={1449.99}
        trial
        signals
        videos
        aiBot
        goLive
        community
      />
      <MembershipPlanCard
        month={199.99}
        year={2199.99}
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
