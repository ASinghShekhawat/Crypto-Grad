import AiSection from '@/components/Homepage/AiSection'
import HeroSection from '@/components/Homepage/HeroSection'
import Page from '@/components/shared/Page'

export default function Home() {
  return (
    <Page className="!p-0">
      <HeroSection />
      <AiSection />
    </Page>
  )
}
