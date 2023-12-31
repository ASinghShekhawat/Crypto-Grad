import Link from 'next/link'
import Accordion from '../shared/policy/Accordion'

export default function PresaleFaq() {
  return (
    <div className="relative mx-auto flex w-full max-w-[960px] flex-col items-center gap-12 overflow-hidden px-4 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pt-24">
      <h1 className="relative z-1 text-center text-4xl font-semibold md:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="relative z-1 flex w-full flex-col">
        <Accordion className="!border-[#5d5aff8e]" title="What is Cryptograd?">
          Cryptograd is a revolutionary crypto education and trading platform
          powered by advanced AI technologies like LLMs, ITTIMs, OCR, and more.
          It offers a user-friendly experience and cutting-edge features for
          both beginners and experts.
        </Accordion>
        <Accordion
          className="!border-[#5D5AFF8E]"
          title="Why Choose Cryptograd?"
        >
          Cryptograd stands out with its comprehensive platform, designed for
          all skill level traders. It provides a competitive edge with features
          like a chatbot, trade analyser, AI news, and smart contract analysis,
          all delivered responsibly and accurately. Join us for the future of
          crypto education and trading. How do I get access to what Cryptograd
          offers?
        </Accordion>
        <Accordion
          className="!border-[#5D5AFF8E]"
          title="How do I get access to what Cryptograd offers?"
        >
          To access Cryptograd&apos;s offerings, including our cutting-edge
          technology and educational resources, you can participate in our
          presale. By joining the presale, you&apos;ll gain early access and
          exclusive benefits.
        </Accordion>
        <Accordion
          className="!border-[#5D5AFF8E]"
          title="How can I participate in Cryptograd's presale?
          "
        >
          Participating in the presale is easy. You can visit our presale page,
          connect supported wallets, and purchase CG tokens using supported
          cryptocurrencies.
        </Accordion>
        <Accordion
          className="!border-[#5D5AFF8E]"
          title="How can I earn CG tokens through the referral system during the presale?"
        >
          During our presale, you can earn CG tokens by referring friends and
          contacts to participate. When your referrals join the presale and
          purchase CG tokens, you will receive a reward in CG tokens as a
          percentage of their contribution. This referral system is designed to
          incentivize and reward you for spreading the word about Cryptograd and
          contributing to our community&apos;s growth. A more detailed guide on
          referral can be seen here-{' '}
          <Link
            href="/referral"
            className="text-themeBorderBlue underline"
          >
            https://cryptograd.ai/referral
          </Link>
        </Accordion>
        <Accordion
          className="!border-[#5D5AFF8E]"
          title="is there vesting for CG tokens?
          "
        >
          Yes, Cryptograd&apos;s vesting schedule for CG tokens starts with an
          initial allocation of 15% at the token&apos;s launch. Afterward, the
          remaining tokens will unlock gradually on a daily basis over a span of
          12 months.
        </Accordion>
      </div>
    </div>
  )
}
