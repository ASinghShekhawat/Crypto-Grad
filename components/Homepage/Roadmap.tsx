import { FiArrowUpRight } from 'react-icons/fi'
import Animated from '../shared/Animated'
import RoadmapImage from './RoadmapImage'

const Roadmap = () => {
  return (
    <Animated
      id="roadmap"
      className="flex flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center md:py-20 mmd:px-16"
    >
      <div className="relative z-1 text-lg font-medium text-themeBlue">
        Our Roadmap
      </div>
      <div className="pt-4 text-3xl font-bold md:text-5xl">
        Road to Conquest
      </div>
      <div className="mt-4 text-white/80 mmd:w-[900PX]">
        Commencing the journey to conquest involves four key phases:
      </div>
      <RoadmapImage />
      <a
        href="https://app.gitbook.com/o/42NMOhVCI8zEWVh1qo3k/s/JynSaWSTR8EZgdljgGlE/"
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBorderBlue bg-themeBlack px-4 text-lg font-medium transition-all hover:text-themeVioletText md:px-6"
      >
        View Docs <FiArrowUpRight />
      </a>
    </Animated>
  )
}

export default Roadmap
