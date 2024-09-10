import React from "react";
import BearVideo from "../../assets/videos/Bear_video.mp4";
import bkvmLogo from "../../assets/pics/bkvm_logo.png";
const Home = () => {
  return (
    <main className="scroll-smooth relative">
      <video
        src={BearVideo}
        autoPlay
        loop
        muted
        className="w-full h-[120vh] object-cover relative"
      ></video>
      <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
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
        <div className="w-full items-center gap-10">
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 flex flex-col w-full justify-center items-center gap-10">
            <p className="text-white text-2xl font-normal tracking-[0.2rem]">
              BAL KALYAN VIDYA MANDIR
            </p>
            <p className="text-white text-7xl tracking-[0.2rem] font-bold font-comfortaa">
              A Clear Path for Potential
            </p>
            <button className="bg-red-700 text-white py-5 px-7 tracking-[0.2rem] font-sans font-normal text-xl">
              LEARN MORE
            </button>
          </div>
          <div className="flex gap-10 w-[80%] absolute left-1/2 -translate-x-1/2 bottom-5">
            <div className="flex flex-col justify-center items-center flex-1 gap-3">
              <p className="text-white font-comfortaa tracking-[0.2rem] text-xl">
                MIND
              </p>
              <p className="text-gray-300 font-sans text-xl leading-8 text-center">
                A solid academic foundation that fosters independent thinking
                and innovation.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center flex-1 gap-3">
              <p className="text-white font-comfortaa tracking-[0.2rem] text-xl">
                BODY
              </p>
              <p className="text-gray-300 font-sans text-xl leading-8 text-center">
                Athletic opportunities to enhance physical abilities and foster
                teamwork.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center flex-1 gap-3">
              <p className="text-white font-comfortaa tracking-[0.2rem] text-xl">
                SPIRIT
              </p>
              <p className="text-gray-300 font-sans text-xl leading-8 text-center">
                Inspiring students to pursue a higher mission and lead a
                purpose-driven life.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center flex-1 gap-3">
              <p className="text-white font-comfortaa tracking-[0.2rem] text-xl ">
                CHARACTER
              </p>
              <p className="text-gray-300 font-sans text-xl leading-8 text-center">
                Fostering integrity and encouraging one another to uphold the
                highest standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
