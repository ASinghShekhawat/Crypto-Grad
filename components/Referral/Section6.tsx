import Animated from '../shared/Animated'
import Calculator from './Calculator'

export default function Section6() {
  return (
    <Animated className="flex flex-col items-center justify-center gap-12 px-4 pt-16 md:px-16 md:pt-24">
      <div className="flex flex-col items-center justify-center gap-4 pb-12">
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
          Rewards Calculator
        </div>
        <div className="text-center font-light mmd:w-3/5">
          Stake the token to unlock rewards, secure gains, and optimise your
          investment potential. This marks the beginning of your journey towards
          substantial growth!
        </div>
      </div>
      <Calculator className="md:!max-w-[600px]" />
    </Animated>
  )
}
