import Image from 'next/image'
import Animated from '../shared/Animated'
import GrowthActions from './GrowthActions'
import GrowthImage from './GrowthImage'

const Growth = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center px-8 py-20 md:min-w-fit mmd:flex-row mmd:px-16">
      <div className="w-full">
        <div className="relative z-1 mb-2 text-xl font-semibold text-themeBlue">
          Embrace Growth
        </div>
        <div className="whitespace-nowrap text-3xl font-bold md:text-5xl">
          Be a Part of <br /> Something Special
        </div>
        <div className="mt-4">
          Step into a space where ideas flourish, like minds connect, and
          inspiration knows no bounds. Join us now!
        </div>
        <GrowthActions />
      </div>
      <GrowthImage />
    </Animated>
  )
}

export default Growth
