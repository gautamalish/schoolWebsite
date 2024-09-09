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
      <div className="flex justify-between">
        <div>
          <p className="menu">MENU</p>
        </div>
        <div className="absolute top-5 left-1/2 w-fit transform -translate-x-1/2 max-sm:hidden">
          <img src={bkvmLogo} alt="Logo" className=" top-0 m-auto w-2/3" />
        </div>
        <p className="admission">ADMISSION</p>
      </div>
    </main>
  );
};

export default Home;
