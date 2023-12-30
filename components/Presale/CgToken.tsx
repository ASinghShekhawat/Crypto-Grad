import Image from 'next/image'
import Animated from '../shared/Animated'

const CgToken = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center px-4 md:min-w-fit md:py-20 mmd:flex-row mmd:px-16">
      <div className="flex w-full flex-col items-start gap-8">
        <div className="w-fit rounded-full border border-themeBorderBlue/25 bg-gradient-to-b from-white/5 to-white/0 px-3 py-1 backdrop-blur-lg">
          Token Presale
        </div>
        <div className="mt-2 text-3xl font-bold md:text-5xl">CG Tokens</div>
        <div className="font-light text-white/80">
          Discover CG Token: Your key to a secure, decentralized future. Powered
          by cutting-edge blockchain tech, CG Token provides a seamless, secure
          platform for transactions in the Cryptograd community. Join us in
          shaping the future of digital assets!
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm text-white/50">Launching soon on...</div>
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/Presale/UniswapBadge1.png"
                alt=""
                width={56}
                height={56}
                // className="h-12 w-12"
              />
              <div>Uniswap</div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/Presale/BinanceSmartChainBadge.png"
                alt=""
                width={56}
                height={56}
                // className="h-12 w-12"
              />
              <div>Solana</div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/Presale/UniswapBadge.png"
                alt=""
                width={56}
                height={56}
                // className="h-12 w-12"
              />
              <div>
                Revealing <br />
                Soon
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center">
        <Image
          src="/Presale/Reward  & Earn Wheel.png"
          alt=""
          width={127}
          height={127}
          className="absolute right-0 top-0 hidden mmd:block spinner"
        />
        <Image
          src="/Homepage/LargeToken/largeToken.png"
          className="object-contain"
          alt=""
          width={489}
          height={492}
        />
      </div>
    </Animated>
  )
}

export default CgToken
