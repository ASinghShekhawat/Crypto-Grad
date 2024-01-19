import Image from 'next/image'
import { FaUserLarge } from 'react-icons/fa6'

export default function UserMessage({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-2 rounded-xl p-2">
      {/* <Image src="/" width={} height={} alt="" className='' /> */}
      <div className="flex h-12 w-12 min-w-[3rem] items-center justify-center overflow-hidden rounded-full bg-themeLightGrey">
        <FaUserLarge className="text-2xl" />
      </div>
      <div className="w-full whitespace-pre-wrap">{message}</div>
    </div>
  )
}
