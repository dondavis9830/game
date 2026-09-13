import React, { useEffect, useRef } from "react";

export default function LevelCompleated() {

  const Name = JSON.parse(
    localStorage.getItem("currentuser")
  );

  const newscore =
    JSON.parse(
      localStorage.getItem(`SCORE${Name}`)
    ) || 0;

  // Play win sound only once
  const winSound = useRef(
    new Audio("/music/win.mp3")
  );

  useEffect(() => {
    const sound = winSound.current;

    sound.currentTime = 0;
    sound.play().catch((error) => {
      console.log("Win sound error:", error);
    });

    return () => {
      sound.pause();
      sound.currentTime = 0;
    };
  }, []);

  return (

    <div
      className="
        min-h-[70vh]
        w-full

        flex
        justify-center
        items-center

        px-3
        sm:px-5
        md:px-8

        py-6
        sm:py-8
      "
    >

      {/* MAIN CARD */}

      <div
        className="
          w-full

          max-w-xs
          sm:max-w-md
          md:max-w-lg
          lg:max-w-xl

          bg-white/10
          backdrop-blur-xl

          border
          border-white/20

          rounded-2xl
          sm:rounded-3xl

          p-5
          sm:p-7
          md:p-10
          lg:p-12

          text-center

          shadow-2xl
        "
      >

        {/* TROPHY */}

        <div
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl

            mb-3
            sm:mb-5

            animate-bounce
          "
        >
          🏆
        </div>


        {/* TITLE */}

        <h1
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl

            font-extrabold

            text-white

            mb-2
            sm:mb-3
          "
        >
          Game Completed!
        </h1>


        {/* SUBTITLE */}

        <p
          className="
            text-sm
            sm:text-base
            md:text-lg

            text-white/70

            mb-5
            sm:mb-7
            md:mb-8

            leading-relaxed
          "
        >
          Amazing! You completed all 3 levels.
        </p>


        {/* SCORE CARD */}

        <div
          className="
            bg-gradient-to-r
            from-purple-600
            via-pink-500
            to-orange-400

            rounded-xl
            sm:rounded-2xl

            p-4
            sm:p-5
            md:p-6

            mb-5
            sm:mb-7
            md:mb-8

            shadow-lg
          "
        >

          <p
            className="
              text-sm
              sm:text-base
              md:text-lg

              text-white/80
            "
          >
            Your Total Score
          </p>


          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl

              font-black

              text-white

              mt-1
              sm:mt-2

              break-words
            "
          >
            {newscore}
          </h2>


          <p
            className="
              text-sm
              sm:text-base

              text-white/80

              mt-1
              sm:mt-2
            "
          >
            points
          </p>

        </div>


        {/* MESSAGE */}

        <div
          className="
            mb-5
            sm:mb-7
            md:mb-8
          "
        >

          <p
            className="
              text-lg
              sm:text-xl

              font-semibold

              text-white
            "
          >
            Great Job!
          </p>

          <p
            className="
              text-sm
              sm:text-base

              text-white/60

              mt-1
              sm:mt-2
            "
          >
            You made it through the entire game.
          </p>

        </div>


        {/* BUTTONS */}

        <div
          className="
            flex
            flex-col
            sm:flex-row

            gap-3
            sm:gap-4

            justify-center
          "
        >

          {/* PLAY AGAIN */}

          <button
            onClick={() =>
              window.location.reload()
            }

            className="
              w-full
              sm:w-auto

              px-5
              sm:px-6

              py-2.5
              sm:py-3

              rounded-xl

              bg-purple-600
              hover:bg-purple-700

              text-white

              text-sm
              sm:text-base

              font-bold

              transition
              duration-300

              hover:scale-105
              active:scale-95

              shadow-lg
            "
          >
            Play Again 
          </button>


          {/* HOME */}

          <button
            onClick={() => {
              window.location.href =
                "/game-home";
            }}

            className="
              w-full
              sm:w-auto

              px-5
              sm:px-6

              py-2.5
              sm:py-3

              rounded-xl

              bg-white/10
              hover:bg-white/20

              border
              border-white/20

              text-white

              text-sm
              sm:text-base

              font-bold

              transition
              duration-300

              hover:scale-105
              active:scale-95
            "
          >
            Home 
          </button>

        </div>

      </div>

    </div>
  );
}