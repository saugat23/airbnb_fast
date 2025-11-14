import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { SlStar } from "react-icons/sl";

type Props = {
  roomImg: string,
  isFavorite: boolean,
  name: string,
  dates: string,
  rate: string,
  rating: number
}

const RoomCard = ({ roomImg, isFavorite, name, dates, rate, rating }: Props) => {
  return (
    <>
      <div className="w-auto h-auto flex-col items-start space-y-1 text-gray-700 text-xs">
        <Image src={roomImg} alt="Room Image" width={20} height={28} className="h-3/4 w-full relative" />
        {isFavorite ?? <button className="absolute top-8 left-8 p-2 rounded-full bg-[#e0e0e0] text-black"></button>}
        <button className="absolute top-2 right-2"><FcLike fill="#e0e0e0" /></button>
        <h1 className="text-black">{name}</h1>
        <p>{dates}</p>
        <p className="flex justify-center itemes-center"><span>{rate}</span><SlStar className="text-airbnb fill-airbnb" /><span>{rating}</span></p>
      </div>
    </>
  )
}

export default RoomCard
