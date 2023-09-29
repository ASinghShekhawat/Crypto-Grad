import Image from 'next/image'

const GrowthImage = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/Homepage/Growth/growth.png"
        className="w-full"
        width={731}
        height={803}
        alt=""
      />
      <div className="absolute md:scale-100 scale-75 xl:scale-100 mmd:scale-75 left-[5%] top-[20%] rounded-lg border border-themeTextGrey/30 bg-themeDialogBlack/40 px-4 py-2 backdrop-blur-lg">
        24/7 chart updates with AI
      </div>
      <div className="absolute md:scale-100 scale-75 xl:scale-100 mmd:scale-75 right-[5%] top-[50%] rounded-lg border border-themeTextGrey/40 bg-themeDialogBlack/30 px-4 py-2 backdrop-blur-lg">
        Access to exclusive community✨
      </div>
      <div className="absolute md:scale-100 scale-75 xl:scale-100 mmd:scale-75 bottom-[12%] left-[20%] rounded-lg border border-themeTextGrey/40 bg-themeDialogBlack/30 px-4 py-2 backdrop-blur-lg">
        All in one knowledge base
      </div>
    </div>
  )
}

export default GrowthImage
