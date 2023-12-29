import Animated from '../shared/Animated'
import RoadmapImage from './RoadmapImage'

const Roadmap = () => {
  return (
    <Animated className="flex flex-col items-center justify-center overflow-hidden px-8 pt-20 text-center md:py-20 mmd:px-16">
      <div className="relative z-1 text-lg font-medium text-themeBlue">
        Our Roadmap
      </div>
      <div className="text-3xl font-bold pt-4 md:text-5xl">Road to Conquest</div>
      <div className="mt-4 mmd:w-4/5">
        A metaverse hub in accord with an exclusive governance token supported
        by real-world utility, a release of limited edition NFTs, and a poker
        parlour for high-stakes tournaments.
      </div>
      <RoadmapImage />
    </Animated>
  )
}

export default Roadmap
