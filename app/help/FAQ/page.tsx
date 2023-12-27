import Accordion from '@/components/shared/policy/Accordion'
import Image from 'next/image'

export default function FaqPage() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/Homepage/Community/ellipse.svg"
        alt=""
        className="absolute -bottom-1/2 -top-1/2 z-0 w-full object-contain"
        width={1920}
        height={1920}
      />
      <div className="relative mx-auto flex w-full max-w-[960px] flex-col items-center gap-12 overflow-hidden px-8 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pb-32 mmd:pt-24">
        <h1 className="relative z-1 text-center text-4xl font-semibold md:text-5xl">
          Frequently Asked Questions
        </h1>
        <div className="relative z-1 flex w-full flex-col">
          <Accordion title="What is Cryptograd?">
            Cryptograd is a cutting-edge startup in the crypto trading space
            that incorporates advanced artificial intelligence features. This
            innovative platform leverages AI technology to enhance and
            streamline cryptocurrency trading, offering users intelligent
            insights and tools for more informed decision-making in the dynamic
            crypto market.
          </Accordion>
          <Accordion title="Why Choose Cryptograd?">
            Cryptograd is a cutting-edge startup in the crypto trading space
            that incorporates advanced artificial intelligence features. This
            innovative platform leverages AI technology to enhance and
            streamline cryptocurrency trading, offering users intelligent
            insights and tools for more informed decision-making in the dynamic
            crypto market.
          </Accordion>
          <Accordion title="What is CG Token?">
            Cryptograd is a cutting-edge startup in the crypto trading space
            that incorporates advanced artificial intelligence features. This
            innovative platform leverages AI technology to enhance and
            streamline cryptocurrency trading, offering users intelligent
            insights and tools for more informed decision-making in the dynamic
            crypto market.
          </Accordion>
          <Accordion title="How to mint an NFT?">
            Cryptograd is a cutting-edge startup in the crypto trading space
            that incorporates advanced artificial intelligence features. This
            innovative platform leverages AI technology to enhance and
            streamline cryptocurrency trading, offering users intelligent
            insights and tools for more informed decision-making in the dynamic
            crypto market.
          </Accordion>
          <Accordion title="Can a beginner buy the crypto course?">
            Cryptograd is a cutting-edge startup in the crypto trading space
            that incorporates advanced artificial intelligence features. This
            innovative platform leverages AI technology to enhance and
            streamline cryptocurrency trading, offering users intelligent
            insights and tools for more informed decision-making in the dynamic
            crypto market.
          </Accordion>
          <Accordion title="Can a beginner buy the crypto course?">
            Cryptograd is a cutting-edge startup in the crypto trading space
            that incorporates advanced artificial intelligence features. This
            innovative platform leverages AI technology to enhance and
            streamline cryptocurrency trading, offering users intelligent
            insights and tools for more informed decision-making in the dynamic
            crypto market.
          </Accordion>
          <Accordion title="Whom will be the mentor for 1:1 Sessions?">
            Cryptograd is a cutting-edge startup in the crypto trading space
            that incorporates advanced artificial intelligence features. This
            innovative platform leverages AI technology to enhance and
            streamline cryptocurrency trading, offering users intelligent
            insights and tools for more informed decision-making in the dynamic
            crypto market.
          </Accordion>
          <Accordion title="What can be the best pricing plan?">
            Cryptograd is a cutting-edge startup in the crypto trading space
            that incorporates advanced artificial intelligence features. This
            innovative platform leverages AI technology to enhance and
            streamline cryptocurrency trading, offering users intelligent
            insights and tools for more informed decision-making in the dynamic
            crypto market.
          </Accordion>
        </div>
      </div>
    </div>
  )
}
