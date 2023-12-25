import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'

const LargeToken = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center px-8 md:min-w-fit md:py-20 mmd:flex-row mmd:px-16">
      <div className='w-full flex items-center justify-center'>
        <Image
          src="/Homepage/LargeToken/largeToken.png"
          className="object-contain"
          alt=""
          width={489}
          height={492}
        />
      </div>
      <div className="flex w-full flex-col items-start gap-8">
        <div className="mt-2 text-3xl font-bold md:text-5xl">
          Cryptograd Presale: Secure Your Tokens Now!
        </div>
        <div className="font-light">
          Discover CG Token: Your key to a secure, decentralized future. Powered
          by cutting-edge blockchain tech, CG Token provides a seamless, secure
          platform for transactions in the Cryptograd community. Join us in
          shaping the future of digital assets!
        </div>
        <Button className="!h-12 min-h-[2.5rem]">Buy & Stake Now</Button>
      </div>
    </Animated>
  )
}

export default LargeToken
