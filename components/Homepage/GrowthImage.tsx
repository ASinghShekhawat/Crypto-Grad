import Image from 'next/image'
import Animated from '../shared/Animated'

const GrowthImage = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/Homepage/Growth/refer-earn.png"
        className="w-full"
        width={2097}
        height={1559}
        alt=""
      />
      <Animated
        delay={200}
        className="absolute left-[5%] top-[20%] !scale-75 rounded-lg border border-themeTextGrey/30 bg-themeBlack/75 px-4 py-2 backdrop-blur-lg md:scale-100 mmd:scale-75 xl:scale-100"
      >
        Get extra custom tokens
      </Animated>
      <Animated
        delay={400}
        className="absolute right-[5%] top-[50%] !scale-75 rounded-lg border border-themeTextGrey/40 bg-themeBlack/75 px-4 py-2 backdrop-blur-lg md:scale-100 mmd:scale-75 xl:scale-100"
      >
        Access to cool NFTs
      </Animated>
      <Animated
        delay={600}
        className="absolute bottom-[12%] left-[20%] !scale-75 rounded-lg border border-themeTextGrey/40 bg-themeBlack/75 px-4 py-2 backdrop-blur-lg md:scale-100 mmd:scale-75 xl:scale-100"
      >
        All in one knowledge base
      </Animated>
    </div>
  )
}

export default GrowthImage
