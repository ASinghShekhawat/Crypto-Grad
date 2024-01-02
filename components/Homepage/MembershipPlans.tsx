import MembershipNewCard from './MembershipNewCard'
import MembershipPlanCard from './MembershipPlanCard'

const MembershipPlans = () => {
  return (
    <div className="flex w-full overflow-x-scroll mmd:justify-center mmd:overflow-auto">
      <div className="relative z-1 mt-16 grid w-full min-w-[59rem] grid-cols-3 gap-4 md:w-fit mmd:min-w-0">
        <MembershipNewCard apy={2} price={129.99} planType={1} />
        <MembershipNewCard apy={4} price={329.99} planType={3} />
        <MembershipNewCard apy={7} price={1199.99} planType={12} />
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
    </div>
  )
}

export default MembershipPlans
