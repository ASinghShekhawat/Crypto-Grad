import Brand from '@/components/Navbar/Brand'
import FunctionalNav from './FunctionalNav'

export default function MainNavbar() {
  return (
    <nav className="sticky top-0 z-10 mx-auto flex h-16 w-full items-center justify-between border-themeBorder/30 bg-themeNavBlack/80 bg-opacity-80 px-4 backdrop-blur-lg mmd:h-20 mmd:px-16">
      <div className="flex items-center gap-4">
        <Brand />
        <div className="rounded-full bg-[#20222B] px-4 py-2 text-xs font-light">
          Beta
        </div>
      </div>
      <FunctionalNav />
    </nav>
  )
}
