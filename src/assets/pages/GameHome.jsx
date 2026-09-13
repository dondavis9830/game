
import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

export default function GameHome() {

  const Name = JSON.parse(localStorage.getItem('currentuser'))
  const value = JSON.parse(localStorage.getItem(`highscore${Name}`)) || 0

  const navigate = useNavigate()

  const handleScreenClick = () => {
    // Send a custom event to BgMusic
    window.dispatchEvent(new Event("startMusic"))
  }

  const playmode1 = () => {
    navigate('/play')
  }

  return (
    <div
      onClick={handleScreenClick}
      className="w-full min-h-screen relative cursor-pointer overflow-hidden"
    >

      <Header />

      <section className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">

        {/* Background Video */}
        <video
          src="/videos/play.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>


        {/* Main Content */}
        <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10">

          <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">


            {/* LEFT SIDE */}
            <div className="w-full max-w-md bg-gradient-to-bl from-purple-700 via-pink-700 to-blue-950 p-3 sm:p-5 rounded-xl shadow-2xl">

              {/* Mode Card */}
              <div className="w-full min-h-52 bg-blue-700 flex flex-col justify-center items-center rounded-lg p-5 hover:scale-[1.02] transition-all duration-300">

                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 text-white font-bold">
                  Mode Of Game
                </h1>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">

                  <button
                    onClick={playmode1}
                    className="bg-slate-800 text-white px-5 py-2.5 rounded-lg hover:bg-teal-800 text-lg sm:text-xl transition-all duration-300"
                  >
                    1 Player
                  </button>

                  <button
                    className="bg-slate-800 text-white px-5 py-2.5 rounded-lg hover:bg-teal-800 text-lg sm:text-xl transition-all duration-300"
                  >
                    2 Player
                  </button>

                </div>

              </div>


              {/* Highest Score Card */}
              <div className="w-full min-h-52 mt-5 bg-blue-700 flex flex-col justify-center items-center rounded-lg p-5 hover:scale-[1.02] transition-all duration-300">

                <p className="text-white text-2xl sm:text-3xl text-center">
                  Highest Score
                </p>

                <h1 className="text-lg sm:text-xl p-3 text-white break-all text-center">
                  {Name}
                </h1>

                <h2 className="text-slate-950 text-4xl sm:text-5xl font-black mt-2">
                  {value}
                </h2>

              </div>

            </div>


            {/* RIGHT SIDE - GIF */}
            <div className="w-full max-w-md flex justify-center hover:scale-[1.03] transition-all duration-300">

              <img
                className="w-full max-w-md rounded-xl shadow-2xl object-contain"
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXd2cjloczY4eDh5NDNuM2FrdXh1cnc4cDN4MXdneWZ4eHZ2N3A5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0zHMNoLl395p0k5dYN/giphy.gif"
                alt="Game animation"
              />

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

