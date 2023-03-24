"use client";
import Search from "../../public/Search.png";
import Image from "next/image";
export default function Form() {
  return (
    <div className="container px-8 ">
      <form action="" method="get">
        <div className="flex justify-between items-center bg-whiteCostume px-4 py-2  mx-auto rounded-lg max-w-[316px] md:max-w-sm lg:max-w-md">
          <div className="logoSearch flex justify-center items-center gap-2 ">
            <Image src={Search} alt="Search" className="w-6 md:w-7 lg:w-8"/>
            <div>
              <input
                type="text"
                placeholder="Search Location"
                className="text-sm w-full px-4 py-2 bg-transparent focus:outline-none md:max-w-[140%] lg:max-w-[170%]"
              />
            </div>
          </div>
          <input
            type="button"
            value="Search"
            className="bg-darkBlue p-2 text-white rounded-lg"
          />
        </div>
      </form>
      <h1 className="text-center text-lg text-white font-semibold mt-8 mb-4 md:text-2xl">
        Current Location is Unknown
      </h1>
      <div className="bg-whiteCostume rounded-2xl  mx-auto h-fit px-8 py-5 max-w-[316px]  lg:max-w-sm">
        <h1 className="text-center">Current Time</h1>
        <h1 className="font-semibold text-3xl mt-1 text-center">25 Maret 2023</h1>
        <div className="flex justify-center items-center mt-2 gap-5 md:gap-3">
          <div className="clock flex justify-center items-center flex-col w-12">
            <h1 className="font-medium  text-4xl">16</h1>
          </div>
          <h1 className="font-medium  text-2xl">:</h1>
          <div className="clock flex justify-center items-center flex-col w-12">
            <h1 className="font-medium  text-4xl">07</h1>
          </div>
          <h1 className="font-medium  text-2xl">:</h1>
          <div className="clock flex justify-center items-center flex-col w-12">
            <h1 className="font-medium  text-4xl">20</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
