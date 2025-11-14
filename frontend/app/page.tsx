import RoomCard from "@/components/RoomCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <RoomCard roomImg="/navbar-home.avif" isFavorite={true} name="Guesthouse in Hetauda" dates="12-14 Dec" rate="$200 for 2 nights" rating={4.5} />
    </div>
  );
}
