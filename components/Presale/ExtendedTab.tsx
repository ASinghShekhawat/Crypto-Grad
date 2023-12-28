import Animated from '../shared/Animated'
import Button from '../shared/Button'
import TabInfo from '../shared/TabInfo'

export default function ExtendedTab() {
  return (
    <Animated className="flex flex-col items-center justify-center gap-4 pt-16">
      <div className="relative z-1 text-lg font-medium text-center text-themeBlue">
        Over 5000 Early Adopters Already Onboard!
      </div>
      <div className="relative z-10 py-8 text-center text-3xl font-bold md:text-5xl">
        Cryptograd Presale: <br />
        Secure Exclusive Platform Access
      </div>
      <Button className="mb-4 h-12 w-fit !font-normal">Buy & Stake Now</Button>
      <TabInfo />
    </Animated>
  )
}
