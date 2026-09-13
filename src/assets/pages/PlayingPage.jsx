import React, { useState } from 'react'
import Header from '../components/Header'
import Level1 from '../components/Level1'
import Level2 from '../components/Level2'
import Level3 from '../components/Level3'
import LevelCompleated from '../components/LevelCompleated'

export default function PlayingPage() {

  const Name = JSON.parse(localStorage.getItem('currentuser'))
  const value = JSON.parse(localStorage.getItem(`highscore${Name}`)) || 0

  const [currentlevel, setCurrentlevel] = useState(1)

  const handleScreenClick = () => {
    window.dispatchEvent(new Event("startMusic"))
  }

  const nextlevel = () => {
    setCurrentlevel(prev => prev + 1)
  }

  return (
    <div
      onClick={handleScreenClick}
      className="w-full min-h-screen relative overflow-hidden"
    >

      <Header />

      {/* Background */}
      <section className="relative w-full min-h-[calc(100vh-64px)] overflow-hidden">

        <video
          src="/videos/play.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 w-full min-h-[calc(100vh-64px)]">

          {/* High Score */}
          <nav
            className="
              absolute
              top-4
              left-3
              sm:top-5
              sm:left-5
              md:top-6
              md:left-6
              lg:top-8
              lg:left-8
              z-20
            "
          >

            <div
              className="
                flex
                items-center
                gap-1
                sm:gap-2
                bg-fuchsia-950
                text-white
                px-3
                py-2
                sm:px-4
                sm:py-3
                rounded-lg
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
              "
            >

              <h1 className="
                text-sm
                sm:text-base
                md:text-xl
                lg:text-2xl
                font-semibold
              ">
                High Score:
              </h1>

              <p
                id="highScoore"
                className="
                  text-sm
                  sm:text-base
                  md:text-xl
                  lg:text-2xl
                  font-bold
                "
              >
                {value}
              </p>

            </div>

          </nav>


          {/* Game Section */}
          <section
            className="
              w-full
              min-h-[calc(100vh-64px)]
              flex
              justify-center
              items-center
              px-3
              sm:px-5
              md:px-8
              lg:px-12
              pt-20
              sm:pt-24
              pb-8
            "
          >

            {/* Game container */}
            <div
              className="
                w-full
                max-w-xs
                sm:max-w-md
                md:max-w-2xl
                lg:max-w-4xl
                xl:max-w-5xl
              "
            >

              {currentlevel === 1 && (
                <Level1 onNext={nextlevel} />
              )}

              {currentlevel === 2 && (
                <Level2 onNext={nextlevel} />
              )}

              {currentlevel === 3 && (
                <Level3 onNext={nextlevel} />
              )}

              {currentlevel === 4 && (
                <LevelCompleated />
              )}

            </div>

          </section>

        </div>

      </section>

    </div>
  )
}