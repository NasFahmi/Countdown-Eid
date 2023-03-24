import Image from "next/image";
import Mosque from "../../public/Mosque.png";
import Stars from "../../public/Stars.png";
import Moon from "../../public/Moon.png";
export default function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-b from-darkBlue to-purple w-full h-full relative flex justify-center items-center flex-col">
        <Image src={Stars} alt="Stars" className="w-[100%] absolute h-auto " />
        <Image src={Mosque} alt="Mosque" className="min-w-[10%] w-full h-auto mt-96 z-10" />
        <div className="absolute top-[-25%] left-0 right-0 bottom-0 flex justify-center items-center flex-col gap-10 z-20">
          <h1 className="font-medium text-white text-lg">
            We are Going to Eid al-Fitr
          </h1>
          <div className="countdown">
            <div className="flex justify-center items-center gap-8">
              <div className="clock flex justify-center items-center flex-col">
                <h1 className="font-medium text-white text-3xl">28</h1>
                <h1 className="font-normal text-white text-base">Days</h1>
              </div>
              <h1 className="font-medium text-white text-2xl">:</h1>
              <div className="clock flex justify-center items-center flex-col">
                <h1 className="font-medium text-white text-3xl">07</h1>
                <h1 className="font-normal text-white text-base">Hours</h1>
              </div>
              <h1 className="font-medium text-white text-2xl">:</h1>
              <div className="clock flex justify-center items-center flex-col">
                <h1 className="font-medium text-white text-3xl">20</h1>
                <h1 className="font-normal text-white text-base">Minutes</h1>
              </div>
              <h1 className="font-medium text-white text-2xl">:</h1>
              <div className="clock flex justify-center items-center flex-col">
                <h1 className="font-medium text-white text-3xl">12</h1>
                <h1 className="font-normal text-white text-base">Secound</h1>
              </div>
            </div>
          </div>
          <h1 className="font-medium text-white text-lg">
            Selamat Menjalankan Ibadah Puasa Ramadhan 1444H
          </h1>
        </div>
      </div>
    </div>
  );
}
