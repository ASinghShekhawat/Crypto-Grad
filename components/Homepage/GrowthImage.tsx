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
        className="absolute -left-12 top-0 !scale-[0.65] rounded-lg border border-themeTextGrey/30 bg-themeBlack/75 px-4 py-2 backdrop-blur-lg md:left-[5%] md:top-[20%] md:scale-100 mmd:scale-75 xl:scale-100"
      >
        Get extra custom tokens
      </Animated>
      <Animated
        delay={400}
        className="absolute top-[35%] -right-8 !scale-[0.65] rounded-lg border border-themeTextGrey/40 bg-themeBlack/75 px-4 py-2 backdrop-blur-lg md:right-[5%] md:top-[50%] md:scale-100 mmd:scale-75 xl:scale-100"
      >
        Access to cool NFTs
      </Animated>
      <Animated
        delay={600}
        className="absolute bottom-[12%] left-[20%] !scale-[0.65] rounded-lg border border-themeTextGrey/40 bg-themeBlack/75 px-4 py-2 backdrop-blur-lg md:scale-100 mmd:scale-75 xl:scale-100"
      >
        All in one knowledge base
      </Animated>
    </div>
  )
}

export default GrowthImage
