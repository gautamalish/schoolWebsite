import React from "react";
import BearVideo from "../assets/videos/Bear_video.mp4";
import bkvmLogo from "../assets/pics/bkvm_logo.png";
const Home = () => {
  return (
    <main className="">
      <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
      <video
        src={BearVideo}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      ></video>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div>
            <p className="menu">MENU</p>
          </div>
          <div className="absolute top-5 left-1/2 w-fit transform -translate-x-1/2 max-sm:hidden">
            <img src={bkvmLogo} alt="Logo" className=" top-0 m-auto w-2/3" />
          </div>
          <p className="admission">ADMISSION</p>
        </div>
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full items-center gap-10">
          <p className="text-white text-2xl tracking-[0.2rem]">
            BAL KALYAN VIDYA MANDIR
          </p>
          <p className="text-white text-7xl tracking-[0.2rem] font-sans">
            A Clear Path for Potential
          </p>
          <button className="bg-red-700 text-white py-5 px-7 tracking-[0.2rem] font-sans text-xl">
            LEARN MORE
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
