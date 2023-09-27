import Image from 'next/image'
import { FaEthereum } from 'react-icons/fa'

interface INftCard {
  id: string
  imageUrl: string
  name: string
  price: number
}

const NftCard = ({ id, imageUrl, name, price }: INftCard) => {
  return (
    <div className="relative z-1 aspect-[11/13] w-[180px] md:w-[280px] overflow-hidden rounded-2xl">
      <Image
        // src="/Nft/nft1.png"
        src={imageUrl}
        width={1080}
        height={1087}
        className="relative z-0 h-full object-cover"
        alt=""
      />
      <div className="absolute bottom-0 z-1 flex aspect-[11/3] w-full flex-col justify-center gap-1 rounded-xl bg-themeBgBlack/30 p-4 backdrop-blur-md">
        <div className="text-xl font-medium">{name}</div>
        <div className="flex items-center gap-1 font-light">
          {price} ETH <FaEthereum />
        </div>
      </div>
    </div>
  )
}

export default NftCard
