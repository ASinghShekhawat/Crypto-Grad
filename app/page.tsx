import AiSection from '@/components/Homepage/AiSection'
import AiSection5 from '@/components/Homepage/AiSection5'
import HeroSection from '@/components/Homepage/HeroSection'
import LiveEducator from '@/components/Homepage/LiveEducator'
import NeverMissABeat from '@/components/Homepage/NeverMissABeat'
import NftCollection from '@/components/Homepage/NftCollection'
import Section3 from '@/components/Homepage/Section3'
import Page from '@/components/shared/Page'

export default function Home() {
  return (
    <Page className="!p-0">
      <HeroSection />
      <AiSection />
      <Section3 />
      <NftCollection />
      <AiSection5 />
      <LiveEducator />
      {/* //!pending one */}
      <NeverMissABeat />
    </Page>
  )
}
