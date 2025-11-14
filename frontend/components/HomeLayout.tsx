import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const HomeLayout = () => {
  return (
    <>
      <nav className='w-full h-auto bg-linear-to-b from-white to-[#e0e0e0] py-4 px-8 text-black text-xl font-medium flex flex-col space-y-6 justify-center items-center'>
        <div className="p-8 flex justify-between items-center w-full">
          <Image src="/airbnb.webp" alt="Logo" width={120} height={60} />
          <div className="flex jutify-center space-x-5 items-center text-zinc-600 font-light text-base">
            <div className="border-b-3 border-black w-auto group flex justify-center items-center">
              <Image src="/navbar-home.avif" alt="Homes" width={60} height={60} className="inline group-hover:scale-110" />
              <span className="font-bold">Homes</span>
            </div>
            <div className="border-b-3 border-black w-auto group flex justify-center items-center">
              <Image src="/navbar-experience.avif" alt="Homes" width={60} height={60} className="inline group-hover:scale-110" />
              <span className="font-bold">Experiences</span>
            </div>
            <div className="border-b-3 border-black w-auto group flex justify-center items-center">
              <Image src="/navbar-services.avif" alt="Homes" width={60} height={60} className="inline group-hover:scale-110" />
              <span className="font-bold">Services</span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <button className="bg-white rounded-full shadow px-5 py-3 text-base">Become a host</button>
            <button className="bg-[#e0e0e0] rounded-full p-2"><BiWorld fill="black" /></button>
            <button className="bg-[#e0e0e0] rounded-full p-2"><GiHamburgerMenu fill="black" /></button>
          </div>
        </div>
        <div className="">
          <form className="flex justify-center space-x-4 items-center rounded-full w-auto h-auto bg-white text-gray-600 p-4 shadow-xl text-base border border-gray-300">
            <div className="flex-col justify-center items-center border-r border-gray-200 px-2 xl:w-40">
              <label className="text-bold text-black block">Where</label>
              <select name="where-destination" id="where-destination" defaultValue="Search Destinations" className="self-start block">Search Destinations
                <option value="Sydney">Sydney</option>
                <option value="Sydney">Sydney</option>
                <option value="Sydney">Sydney</option>
                <option value="Sydney">Sydney</option>
                <option value="Sydney">Sydney</option>
                <option value="Sydney">Sydney</option>
              </select>
            </div>
            <div className="flex-col justify-center items-center border-r border-gray-200 px-2 xl:w-52">
              <label className="block">Check-in</label>
              <input type="date" name="check-in" className="outline-none" />
            </div>
            <div className="flex-col justify-center items-center border-r border-gray-200 px-2 xl:w-40">
              <label className="block">Check-out</label>
              <input type="date" name="check-out" className="outline-none" />
            </div>
            <div className="flex-col justify-center items-center border-r border-gray-200 px-2 xl:w-40">
              <label className="block">Who</label>
              <input type="date" name="guests" className="outline-none" />
            </div>
            <button type="submit" className="bg-airbnb hover:bg-airbnb-dark p-3 rounded-full fill-white text-white"><FaSearch className="text-white fill-white" /></button>
          </form>
        </div>
      </nav>

    </>
  )
}

export default HomeLayout
