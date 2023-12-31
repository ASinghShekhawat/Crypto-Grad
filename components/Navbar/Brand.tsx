import Image from 'next/image'
import Link from 'next/link'

const Brand = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2">
      <Image
        src={'/cryptogradSmall.svg'}
        height={23}
        width={30}
        alt="brand-logo"
      />
      <div className="text-lg font-semibold relative">
        Cryptograd <span className="text-[0.4rem] absolute -top-2 -right-3">TM</span>
      </div>
    </Link>
  )
}

export default Brand
