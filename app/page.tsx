import AiSection from '@/components/Homepage/AiSection'
import AiSection5 from '@/components/Homepage/AiSection5'
// import CgBenefits from '@/components/Homepage/CgBenefits'
import Community from '@/components/Homepage/Community'
import Discord from '@/components/Homepage/Discord'
// import Experience from '@/components/Homepage/Experience'
import Growth from '@/components/Homepage/Growth'
import HeroSection from '@/components/Homepage/HeroSection'
import LargeToken from '@/components/Homepage/LargeToken'
// import LiveEducator from '@/components/Homepage/LiveEducator'
import Membership from '@/components/Homepage/Membership'
// import NativeToken from '@/components/Homepage/NativeToken'
// import NeverMissABeat from '@/components/Homepage/NeverMissABeat'
// import NftCollection from '@/components/Homepage/NftCollection'
// import PartneredNfts from '@/components/Homepage/PartneredNfts'
import Roadmap from '@/components/Homepage/Roadmap'
// import Section3 from '@/components/Homepage/Section3'
// import Waitlist from '@/components/Homepage/Waitlist'
import BackedBy from '@/components/shared/BackedBy'
import Page from '@/components/shared/Page'
import StakingBenefits from '@/components/shared/StakingBenefits'
import TabInfo from '@/components/shared/TabInfo'

export default function Home() {
  return (
    <Page className="!p-0">
      <div className="from-[#6754f81c] to-transparent md:bg-gradient-to-tl">
        <HeroSection />
        <TabInfo />
        <BackedBy />
      </div>
      <div className="from-[#6754f81c] to-transparent md:bg-gradient-to-bl">
        <StakingBenefits />
        <LargeToken />
        <AiSection />
      </div>
      <div className="from-[#6754f81c] to-transparent md:bg-gradient-to-tl">
        {/* <Section3 /> */}
        {/* <NftCollection /> */}
        <AiSection5 />
        <Discord />
        {/* ! Discord */}
        {/* <LiveEducator /> */}
        {/* <Experience /> */}
        <Membership />
      </div>
      <div className="from-[#6754f81c] to-transparent md:bg-gradient-to-bl">
        {/* <NeverMissABeat />
        <NativeToken />
        <CgBenefits />
        <Waitlist />
        <PartneredNfts /> */}
        <Roadmap />
        <Growth />
        <Community />
      </div>
    </Page>
  )
}
