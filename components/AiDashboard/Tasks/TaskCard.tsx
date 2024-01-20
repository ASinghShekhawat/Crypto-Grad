import Image from 'next/image'
interface ITaskCard {
  name: string
  icon: string
  description: string
}
const TaskCard = ({ name, icon, description }: ITaskCard) => {
  return (
    <div
      className={`col-span-4 flex h-44 cursor-pointer flex-col justify-around rounded-2xl bg-[#25252E] px-4 opacity-[0.9] md:col-span-2`}
    >
      <p className="text-xl font-medium leading-[140%] text-white/80">{name}</p>
      {description !== '' && icon !== '' ? (
        <div className="flex items-center gap-2">
          <p className="text-sm font-normal leading-[140%] text-white/80 ">
            {description}
          </p>
          <Image
            src={icon}
            alt=""
            className="h-4 w-4"
            height={800}
            width={800}
          />
        </div>
      ) : (
        <div className="flex items-center gap-2"></div>
      )}
    </div>
  )
}

export default TaskCard
