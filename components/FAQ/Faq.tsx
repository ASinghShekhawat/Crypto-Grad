'use client'

import { useState } from 'react'
import Accordion from '../shared/policy/Accordion'

const FAQ = [
  {
    title: 'What is Cryptograd?',
    content:
      'Cryptograd is a cutting-edge startup in the crypto trading space that incorporates advanced artificial intelligence features. This innovative platform leverages AI technology to enhance and streamline cryptocurrency trading, offering users intelligent insights and tools for more informed decision-making in the dynamic crypto market.',
  },
  {
    title: 'Why Choose Cryptograd?',
    content:
      'Cryptograd is a cutting-edge startup in the crypto trading space that incorporates advanced artificial intelligence features. This innovative platform leverages AI technology to enhance and streamline cryptocurrency trading, offering users intelligent insights and tools for more informed decision-making in the dynamic crypto market.',
  },
  {
    title: 'What is CG Token?',
    content:
      'Cryptograd is a cutting-edge startup in the crypto trading space that incorporates advanced artificial intelligence features. This innovative platform leverages AI technology to enhance and streamline cryptocurrency trading, offering users intelligent insights and tools for more informed decision-making in the dynamic crypto market.',
  },
  {
    title: 'How to mint an NFT?',
    content:
      'Cryptograd is a cutting-edge startup in the crypto trading space that incorporates advanced artificial intelligence features. This innovative platform leverages AI technology to enhance and streamline cryptocurrency trading, offering users intelligent insights and tools for more informed decision-making in the dynamic crypto market.',
  },
  {
    title: 'Can a beginner buy the crypto course?',
    content:
      'Cryptograd is a cutting-edge startup in the crypto trading space that incorporates advanced artificial intelligence features. This innovative platform leverages AI technology to enhance and streamline cryptocurrency trading, offering users intelligent insights and tools for more informed decision-making in the dynamic crypto market.',
  },
  {
    title: 'Can a beginner buy the crypto course?',
    content:
      'Cryptograd is a cutting-edge startup in the crypto trading space that incorporates advanced artificial intelligence features. This innovative platform leverages AI technology to enhance and streamline cryptocurrency trading, offering users intelligent insights and tools for more informed decision-making in the dynamic crypto market.',
  },
  {
    title: 'Whom will be the mentor for 1:1 Sessions?',
    content:
      'Cryptograd is a cutting-edge startup in the crypto trading space that incorporates advanced artificial intelligence features. This innovative platform leverages AI technology to enhance and streamline cryptocurrency trading, offering users intelligent insights and tools for more informed decision-making in the dynamic crypto market.',
  },
  {
    title: 'What can be the best pricing plan?',
    content:
      'Cryptograd is a cutting-edge startup in the crypto trading space that incorporates advanced artificial intelligence features. This innovative platform leverages AI technology to enhance and streamline cryptocurrency trading, offering users intelligent insights and tools for more informed decision-making in the dynamic crypto market.',
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
