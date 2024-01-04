import Animated from '../shared/Animated'
import Section4Image from './Section4Image'

export default function Section4() {
  return (
    <Animated className="flex flex-col-reverse items-center justify-center gap-12 px-8 pt-16 md:px-16 md:pt-24 mmd:flex-row">
      <Section4Image />
      <div className="flex w-full flex-col items-center gap-4 mmd:items-start">
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl mmd:text-left">
          Who Is It For?
        </div>
        <div>🎓 Aspiring College Students Seeking Additional Income</div>
        <div>🧳 Employees Eager to Supplement Their Income</div>
        <div>️🎙️ Influencers Boasting a Massive Following</div>
        <div>🏢 Syndicate leaders running syndicate</div>
      </div>
    </Animated>
  )
}
