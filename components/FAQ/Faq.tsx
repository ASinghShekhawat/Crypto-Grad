'use client'

import { useState } from 'react'
import Accordion from '../shared/policy/Accordion'

const FAQ = [
  {
    title: 'What is Cryptograd?',
    content:
      'Cryptograd is a revolutionary crypto education and trading platform powered by advanced AI technologies like LLMs, ITTIMs, OCR, and more. It offers a user-friendly experience and cutting-edge features for both beginners and experts.',
  },
  {
    title: 'Why Choose Cryptograd?',
    content:
      'Cryptograd stands out with its comprehensive platform, designed for all skill levels. It provides a competitive edge with features like a chatbot, trading signals, AI news, and smart contract analysis, all delivered responsibly and accurately. Join us for the future of crypto education and trading.',
  },
  {
    title: 'What is the cost to access CG AI tools and discord community?',
    content:
      "At Cryptograd, we've designed a unique approach to access our AI tools and Discord Community. Instead of traditional pricing models, our AI tools and Community can be accessed by staking CG tokens. The more you stake, the longer your access to our platforms. Staking CG tokens not only grants you access to our powerful AI tools but also aligns your interests with the Cryptograd community. Stay tuned for more details on staking options and benefits!",
  },
  {
    title: 'How Does Cryptograd (CG) Work?',
    content:
      'Cryptograd (CG) combines AI and blockchain to revolutionize cryptocurrency education and trading. CG offers AI tools, like chatbots and trading assistants, accessed through CG token presale. Staking CG tokens provides access with longer durations and increased benefits. CG fosters a collaborative crypto community and implements a 12-month vesting schedule for token access. Blockchain tech ensures data integrity and trust. CG empowers users with AI-driven support and a secure environment for crypto enthusiasts.',
  },
  {
    title: 'Is there a referral system in the presale?',
    content:
      "Yes, we offer a referral system during the presale. You can refer friends and earn rewards for each successful referral. It's a great way to share the benefits of Cryptograd with your network.",
  },
  {
    title: 'What Technology Does CG AI Use?',
    content:
      'CG AI harnesses cutting-edge technologies such as Natural Language Processing (NLP), Optical Character Recognition (OCR), and advanced Machine Learning (ML) models. These technologies enable CG AI to analyze vast amounts of cryptocurrency-related data, extract valuable insights, and provide real-time support to users. Additionally, CG AI integrates pretrained language models and leverages prompt engineering techniques to enhance its capabilities further. The combination of these technologies ensures that CG AI delivers accurate, efficient, and up-to-date information to empower cryptocurrency enthusiasts and traders.',
  },
  {
    title: 'How does CryptoGrad benefit me?',
    content:
      'Cryptograd is an AI-powered platform designed to enhance your cryptocurrency education and trading experience. It offers AI tools, such as a chatbot, trading assistant, AI live news, CT tracking AI and smart contract analysis, as well as a community to provide valuable insights and support for crypto enthusiasts and traders.',
  },
  {
    title: 'Is my data and information safe on Cryptograd?',
    content:
      'We take data security seriously. Cryptograd employs advanced encryption and security measures to protect your personal and financial information, ensuring a safe user experience.',
  },
  {
    title: 'Is incubation for everyone?',
    content:
      "Yes, Cryptograd's incubation program is designed to cater to individuals and teams at various stages of their blockchain project development journey. Whether you're just starting to conceptualize your blockchain idea, building an MVP, or preparing for market entry, our incubation program provides comprehensive support and guidance tailored to your specific needs. To gain access to Cryptograd's incubation room, simply fill out the incubation form with information about your blockchain project and goals. Our team will review your application to determine eligibility for the program.",
  },
  {
    title: 'Is telegram free to access?',
    content:
      "Yes, Cryptograd's Telegram channel serves as a free community platform for support, announcements, and learning more about Cryptograd and its offerings.",
  },
]

export default function Faq() {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState<any>(null)

  function togglePanels(newPanel: any) {
    if (activeDisclosurePanel) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close()
      }
    }

    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    })
  }
  return (
    <div className="relative mx-auto flex w-full max-w-[960px] flex-col items-center gap-12 overflow-hidden px-4 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pb-32 mmd:pt-24">
      <h1 className="relative z-1 text-center text-4xl font-semibold md:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="relative z-1 flex w-full flex-col">
        {FAQ.map((faq, idx) => (
          <Accordion
            key={idx}
            index={idx}
            togglePanels={togglePanels}
            title={faq.title}
          >
            {faq.content}
          </Accordion>
        ))}
      </div>
    </div>
  )
}
