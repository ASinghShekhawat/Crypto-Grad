import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import { FiArrowUpRight } from 'react-icons/fi'
import { ButtonType } from '@/types/buttton'

export default function Tokenomics() {
  return (
    <Animated id='tokenomics' className="relative z-1 flex flex-col items-center justify-center gap-16 px-4 py-16 mmd:px-16">
      <div className="flex flex-col">
        <div className="relative z-1 text-center text-lg font-medium text-themeBlue">
          Innovate, Govern, Grow - Unleash the Potential with CG Token
        </div>
        <div className="relative z-10 pt-4 text-center text-3xl font-bold md:text-5xl">
          CG Tokenomics
        </div>
      </div>
      <Image
        src="/Presale/tokenomics.png"
        alt=""
        width={1074}
        height={603}
        className="hidden md:block"
      />
      <Image
        src="/Presale/tokenomics-mobile.png"
        alt=""
        width={338}
        height={307}
        className="md:hidden"
      />
      <Button type={ButtonType.SECONDARY} className="h-12">
        View Docs <FiArrowUpRight />
      </Button>
    </Animated>
  )
}
