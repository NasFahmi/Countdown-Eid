import Image from "next/image";
import Mosque from "../../public/Mosque.png";
import Stars from "../../public/Stars.png";
import Moon from "../../public/Moon.png";
export default function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-b from-darkBlue to-purple w-full h-full relative flex justify-center items-center flex-col">
        <Image src={Stars} alt="Stars" className="w-[100%] absolute h-auto " />
        <Image src={Mosque} alt="Mosque" className="min-w-[10%] w-full h-auto mt-80 z-10 " />
        <Image src={Moon} alt="Moon" className="w-[10%] absolute h-auto left-8 top-8 md:w-[5%] md:top-32 md:left-20"/>
        <div className="absolute top-[-25%] left-0 right-0 bottom-0 flex justify-center items-center flex-col gap-10 z-20">
          <h1 className="font-medium text-white text-lg
          md:text-2xl lg:text-3xl">
            We are Going to Eid al-Fitr
          </h1>
          <div className="countdown">
            <div className="flex justify-center items-start gap-3 md:gap-6">
              <div className="clock flex justify-center items-center flex-col w-12">
                <h1 className="font-medium text-white text-2xl md:text-4xl lg:text-5xl">28</h1>
                <h1 className="font-normal text-white text-base lg:text-xl">Days</h1>
              </div>
              <h1 className="font-medium text-white text-2xl ">:</h1>
              <div className="clock flex justify-center items-center flex-col w-12">
                <h1 className="font-medium text-white text-2xl md:text-4xl lg:text-5xl">07</h1>
                <h1 className="font-normal text-white text-base lg:text-xl">Hours</h1>
              </div>
              <h1 className="font-medium text-white text-2xl">:</h1>
              <div className="clock flex justify-center items-center flex-col w-12">
                <h1 className="font-medium text-white text-2xl md:text-4xl lg:text-5xl">20</h1>
                <h1 className="font-normal text-white text-base lg:text-xl">Minutes</h1>
              </div>
              <h1 className="font-medium text-white text-2xl">:</h1>
              <div className="clock flex justify-center items-center flex-col w-12">
                <h1 className="font-medium text-white text-2xl md:text-4xl lg:text-5xl">12</h1>
                <h1 className="font-normal text-white text-base lg:text-xl">Secound</h1>
              </div>
            </div>
          </div>
          <h1 className="font-medium text-white text-lg text-center md:text-xl lg:text-2xl">
            Selamat Menjalankan Ibadah Puasa Ramadhan 1444H
          </h1>
        </div>
      </div>
    </div>
  );
}
