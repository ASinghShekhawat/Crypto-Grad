import Animated from '../shared/Animated'
import RoadmapImage from './RoadmapImage'

const Roadmap = () => {
  return (
    <Animated id='roadmap' className="flex flex-col items-center justify-center overflow-hidden px-8 pt-20 text-center md:py-20 mmd:px-16">
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
    </Animated>
  )
}

export default Roadmap
