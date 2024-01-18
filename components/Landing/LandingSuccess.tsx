import Image from 'next/image'

const LandingSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-5xl font-bold">
      <Image
        className="h-52 w-52"
        src="/landing/big-tick.png"
        alt=""
        width={800}
        height={800}
      />
      Your MetaMask wallet is connected
      <p className="text-xl font-normal leading-[140%] text-white/80">
        The full power of CG AI has been unlocked
      </p>
    </div>
  )
}

export default LandingSuccess
