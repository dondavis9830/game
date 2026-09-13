import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleScreenClick = () => {
    window.dispatchEvent(new Event("startMusic"));
  };

  const handleStart = (e) => {
    e.stopPropagation();

    window.dispatchEvent(new Event("startMusic"));

    navigate("/register");
  };

  return (
    <section
      onClick={handleScreenClick}
      className="w-full min-h-screen relative overflow-hidden cursor-pointer bg-black"
    >

      {/* Background Image */}
      <div className=" absolute inset-0  w-full h-full  bg-contain bg-center  bg-no-repeat  "
        style={{  backgroundImage: "url('https://wallpapercave.com/wp/wp6978917.jpg')",}}>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Start Button */}
      <div className=" absolute inset-x-0  bottom-6 sm:bottom-8  md:bottom-12  lg:bottom-20  flex  justify-center  px-4  z-20">
        <button onClick={handleStart}
                className=" bg-purple-600 hover:bg-purple-700 active:scale-95 text-white w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] px-5 py-3 sm:px-7 sm:py-3 md:px-8 md:py-3 rounded-lg text-lg sm:text-2xl md:text-3xl font-bold shadow-lg transition-all duration-300 whitespace-nowrap">
                Let's Start
        </button>
      </div>

    </section>
  );
}