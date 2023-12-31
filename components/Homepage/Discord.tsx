import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'

const Discord = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center px-4 md:min-w-fit md:py-20 mmd:flex-row mmd:px-16">
      <div className="flex w-full flex-col items-center gap-8 mmd:items-start">
        <div className="text-3xl font-bold md:text-5xl">
          <span className="text-themeBorderBlue">Discord Synergy</span>
        </div>
        <div className="flex flex-col items-center gap-4 text-center text-lg mmd:items-start mmd:text-left">
          <div>⚙️ Access real-time trading signals for informed decisions.</div>
          <div>
            📈 Join a vibrant crypto community for collaboration and insights.
          </div>
          <div>✨ Enhance your crypto journey with multiple AI tools </div>
        </div>
        <Button className="h-12 w-fit text-xl">Get Started</Button>
      </div>
      <div className='w-full'>
        <Image
          src="/Homepage/discord.png"
          width={351}
          height={552}
          alt=""
          className="relative z-0 mx-auto px-12 pl-0 md:pl-12"
        />
      </div>
    </Animated>
  )
}

export default Discord
