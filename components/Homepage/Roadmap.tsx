import Animated from '../shared/Animated'
import RoadmapImage from './RoadmapImage'

const Roadmap = () => {
  return (
    <Animated className="flex flex-col items-center justify-center overflow-hidden px-8 pt-20 text-center md:py-20 mmd:px-16">
      <div className="text-3xl font-bold md:text-5xl">Road to Conquest</div>
      <div className="mt-4">
        An all-encompassing AI-powered learning platform, featuring a
        proprietary, utility-backed token, limited{' '}
        <br className="hidden mmd:block" /> edition NFT launch, and exclusive
        &apos;whale room&apos; for advanced trading insights
      </div>
      <RoadmapImage />
    </Animated>
  )
}

export default Roadmap
