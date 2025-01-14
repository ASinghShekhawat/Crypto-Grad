import Image from 'next/image'
import Tooltip from '../shared/Tooltip'

const RoadmapImage = () => {
  return (
    <div className="relative w-full pb-24 pt-20 md:px-16">
      <div className="relative mx-auto w-fit">
        <Image
          src="/Homepage/Roadmap/line.svg"
          width={1044}
          height={644}
          alt=""
          className="relative z-0 hidden md:block"
        />
        <Image
          src="/Homepage/Roadmap/phoneLine.svg"
          width={332}
          height={597}
          alt=""
          className="relative z-0 block md:hidden"
        />
        <Tooltip
          title={
            <div className="flex flex-col gap-2 p-3">
              <div className="text-2xl font-bold">
                Phase 1: Building Foundation
              </div>
              <ul className="list-inside list-disc">
                <li>Launch CG AI Beta</li>
                <li>Set up E-Learning Platform</li>
                {/* <li>CG AI Beta Live for early adopters</li> */}
                <li>Web3 Referral Model Initiation</li>
                <li>Launch CG Token </li>
                <li>Launch of CG Launchpad</li>
              </ul>
            </div>
          }
        >
          <Image
            src="/Homepage/Roadmap/phase1.png"
            width={523}
            height={175}
            alt=""
            className="absolute -left-[8%] -top-[8%] z-1 w-full bg-themeWebBg/60 backdrop-blur-lg md:-left-[10%] md:-top-[2%] md:w-[50%]"
          />
        </Tooltip>
        <Tooltip
          title={
            <div className="flex flex-col gap-2 p-3">
              <div className="text-2xl font-bold">
                Phase 2: Innovation & Expansion
              </div>
              <ul className="list-inside list-disc">
                <li>50 New Courses</li>
                <li>CG AI Feedback Collection</li>
                <li>Launch Live News & CT AI</li>
                <li>Establish Exclusive Communities</li>
              </ul>
            </div>
          }
        >
          <Image
            src="/Homepage/Roadmap/phase2.png"
            width={512}
            height={265}
            alt=""
            className="absolute -right-[15%] top-[10%] z-1 w-full md:-right-[12%] md:top-[5%] md:w-[48%]"
          />
        </Tooltip>
        <Tooltip
          title={
            <div className="flex flex-col gap-2 p-3">
              <div className="text-2xl font-bold">
                Phase 3: Tech Integration
              </div>
              <ul className="list-inside list-disc">
                <li>Enhance AI Tools & Services</li>
                <li>Automated AI Crypto Signals</li>
                <li>Introduce On-Chain Analysis</li>
                <li>Develop CryptoGrad Launchpad</li>
              </ul>
            </div>
          }
        >
          <Image
            src="/Homepage/Roadmap/phase3.png"
            width={563}
            height={283}
            alt=""
            className="absolute -left-[18%] bottom-[22%] z-1 w-full bg-themeWebBg/60 backdrop-blur-lg md:bottom-[9%] md:left-[5%] md:w-[53%]"
          />
        </Tooltip>
        <Tooltip
          title={
            <div className="flex flex-col gap-2 p-3">
              <div className="text-2xl font-bold">
                Phase 4: Advanced Development
              </div>
              <ul className="list-inside list-disc">
                <li>AI Text-to-Image Beta Launch</li>
                <li>Develop Advanced Trading Tools</li>
                <li>Initiate Incubation Programme</li>
                <li>Onboard 10,000+ Strategic Users</li>
              </ul>
            </div>
          }
        >
          <Image
            src="/Homepage/Roadmap/phase4.png"
            width={541}
            height={190}
            alt=""
            className="absolute -bottom-[5%] -right-[15%] z-1 w-full md:-bottom-[15%] md:right-[10%] md:w-[52%]"
          />
        </Tooltip>
      </div>
    </div>
  )
}

export default RoadmapImage
