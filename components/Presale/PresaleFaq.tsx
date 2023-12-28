import Accordion from '../shared/policy/Accordion'

export default function PresaleFaq() {
  return (
    <div className="relative mx-auto flex w-full max-w-[960px] flex-col items-center gap-12 overflow-hidden px-8 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pt-24">
      <h1 className="relative z-1 text-center text-4xl font-semibold md:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="relative z-1 flex w-full flex-col">
        <Accordion className='!border-[#5d5aff8e]' title="What is Cryptograd?">
          Cryptograd is a cutting-edge startup in the crypto trading space that
          incorporates advanced artificial intelligence features. This
          innovative platform leverages AI technology to enhance and streamline
          cryptocurrency trading, offering users intelligent insights and tools
          for more informed decision-making in the dynamic crypto market.
        </Accordion>
        <Accordion className='!border-[#5D5AFF8E]' title="Why Choose Cryptograd?">
          Cryptograd is a cutting-edge startup in the crypto trading space that
          incorporates advanced artificial intelligence features. This
          innovative platform leverages AI technology to enhance and streamline
          cryptocurrency trading, offering users intelligent insights and tools
          for more informed decision-making in the dynamic crypto market.
        </Accordion>
        <Accordion className='!border-[#5D5AFF8E]' title="What is CG Token?">
          Cryptograd is a cutting-edge startup in the crypto trading space that
          incorporates advanced artificial intelligence features. This
          innovative platform leverages AI technology to enhance and streamline
          cryptocurrency trading, offering users intelligent insights and tools
          for more informed decision-making in the dynamic crypto market.
        </Accordion>
        <Accordion className='!border-[#5D5AFF8E]' title="How to Buy CG Tokens?">
          Cryptograd is a cutting-edge startup in the crypto trading space that
          incorporates advanced artificial intelligence features. This
          innovative platform leverages AI technology to enhance and streamline
          cryptocurrency trading, offering users intelligent insights and tools
          for more informed decision-making in the dynamic crypto market.
        </Accordion>
        <Accordion className='!border-[#5D5AFF8E]' title="What is Refer & Earn?">
          Cryptograd is a cutting-edge startup in the crypto trading space that
          incorporates advanced artificial intelligence features. This
          innovative platform leverages AI technology to enhance and streamline
          cryptocurrency trading, offering users intelligent insights and tools
          for more informed decision-making in the dynamic crypto market.
        </Accordion>
        <Accordion className='!border-[#5D5AFF8E]' title="Will there be more Pre-Sale Rounds?">
          Cryptograd is a cutting-edge startup in the crypto trading space that
          incorporates advanced artificial intelligence features. This
          innovative platform leverages AI technology to enhance and streamline
          cryptocurrency trading, offering users intelligent insights and tools
          for more informed decision-making in the dynamic crypto market.
        </Accordion>
      </div>
    </div>
  )
}
