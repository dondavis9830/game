
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
      className="w-full min-h-screen relative overflow-hidden cursor-pointer"
    >

      {/* Background Image */}
      <div
        className="
          absolute inset-0
          w-full h-full
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('https://wallpapercave.com/wp/wp6978917.jpg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Start Button */}
      <div
        className="
          absolute
          inset-x-0
          bottom-12
          sm:bottom-16
          md:bottom-20
          lg:bottom-24
          flex
          justify-center
          px-4
          sm:px-6
        "
      >
        <button
          onClick={handleStart}
          className="
            bg-purple-600
            hover:bg-purple-700
            active:scale-95
            text-white
            w-auto
            px-5 py-2.5
            sm:px-7 sm:py-3
            md:px-8 md:py-3
            rounded-lg
            text-xl
            sm:text-2xl
            md:text-3xl
            font-bold
            shadow-lg
            hover:shadow-purple-500/50
            transition-all
            duration-300
          "
        >
          Let's Start →
        </button>
      </div>

    </section>
  );
}

