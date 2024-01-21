import Image from 'next/image'
interface IQuickActionCard {
  name: string
  icon: string
  action: string
  color: string
  key: number
}
const QuickActionCard = ({
  name,
  icon,
  action,
  color,
  key,
}: IQuickActionCard) => {
  const textColorClass =
    icon === '/CgAi/ChatAi/chartUp.png' ? 'bg-[#1C55D5]' : icon === '/CgAi/ChatAi/settings.png' ? 'bg-[#5218FE]' : 'bg-[#B418FE]'
  return (
    <div
      className={`col-span-2 flex flex-col justify-between rounded-2xl px-8 py-4 ${textColorClass} h-44 cursor-pointer`}
    >
      <p className="text-2xl font-bold leading-[140%] text-white/80 ">{name}</p>
      <div className="flex items-center gap-2">
        <p className="text-xl font-bold leading-[140%] text-white/80">
          {action}
        </p>
        {icon !== '' && (
          <Image
            className="h-6 w-6"
            src={icon}
            alt=""
            width={800}
            height={800}
          />
        )}
      </div>
    </div>
  )
}

export default QuickActionCard
