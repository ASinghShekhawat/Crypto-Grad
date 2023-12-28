import Hero from '@/components/Presale/Hero'
import BackedBy from '@/components/shared/BackedBy'
import Page from '@/components/shared/Page'
import Image from 'next/image'

export default function PresalePage() {
  return (
    <Page className="relative !p-0">
      <Image
        src="/Presale/bg.svg"
        className="absolute -top-[3rem] left-0 right-0 z-0"
        alt=""
        width={1550}
        height={124}
      />
      <Hero />
      <BackedBy />
    </Page>
  )
}
