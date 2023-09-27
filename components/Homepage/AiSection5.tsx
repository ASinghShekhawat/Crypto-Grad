import Animated from '../shared/Animated'
import Button from '../shared/Button'
import AiSection5Image from './AiSEction5Image'

const AiSection5 = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center px-8 py-20 md:min-w-fit mmd:flex-row">
      <AiSection5Image />
      <div className='flex flex-col gap-8 w-full'>
        <div className="whitespace-nowrap text-3xl font-bold md:text-5xl">
          <span className='text-themeBorderBlue'>With AI, </span>
          It&apos;s possible
        </div>
        <div className='flex flex-col gap-2 text-lg'>
          <div>⚙️ Get proactive and predictive results</div>
          <div>📈 Discover data about the market 24/7</div>
          <div>✨ Transform dreams into decisions</div>
        </div>
        <Button className='text-xl w-fit h-12'>
          Exlpore AI
        </Button>
      </div>
    </Animated>
  )
}

export default AiSection5
