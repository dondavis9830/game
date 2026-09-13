
import React, { useState } from "react";

export default function Level1({ onNext }) {

  const cards = [
    { id: 1, value: "1", image: "/image/apple.svg" },
    { id: 2, value: "3", image: "/image/bat.svg" },
    { id: 3, value: "2", image: "/image/auto.svg" },
    { id: 4, value: "3", image: "/image/bat.svg" },
    { id: 5, value: "1", image: "/image/apple.svg" },
    { id: 6, value: "2", image: "/image/auto.svg" }
  ];

  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  const Name = JSON.parse(
    localStorage.getItem("currentuser")
  );

  const newscore =
    JSON.parse(
      localStorage.getItem(`SCORE${Name}`)
    ) || 0;

  const [score, setScore] = useState(0);

  const matchSound = new Audio("/music/correct.mp3");
  const wrongSound = new Audio("/music/wrong.mp3");

  localStorage.setItem(
    `SCORE${Name}`,
    JSON.stringify(score)
  );

  const handleCardClick = (card) => {

    if (
      flipped.includes(card.id) ||
      matched.includes(card.id) ||
      flipped.length === 2
    ) {
      return;
    }

    const newFlipped = [...flipped, card.id];

    setFlipped(newFlipped);

    if (newFlipped.length === 1) {
      return;
    }

    const firstCard = cards.find(
      (item) => item.id === newFlipped[0]
    );

    const secondCard = cards.find(
      (item) => item.id === newFlipped[1]
    );

    if (firstCard.value === secondCard.value) {

      const newMatched = [
        ...matched,
        firstCard.id,
        secondCard.id
      ];

      setMatched(newMatched);

      matchSound.currentTime = 0;
      matchSound.play();

      setScore((prev) => prev + 50);

      setFlipped([]);

      if (newMatched.length === cards.length) {
        setTimeout(() => {
          onNext();
        }, 700);
      }

    } else {

      wrongSound.currentTime = 0;
      wrongSound.play();

      setScore((prev) => prev - 5);

      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  };

  return (

    <div
      className="
        w-full
        max-w-md
        sm:max-w-lg
        mx-auto

        p-3
        sm:p-5
        md:p-6

        rounded-2xl

        bg-gradient-to-bl
        from-purple-700
        via-pink-700
        to-blue-950

        shadow-2xl
      "
    >

      {/* Score */}

      <div className="text-center mb-4 sm:mb-6">

        <h1
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-white
          "
        >
          Level 1
        </h1>

        <p
          className="
            text-lg
            sm:text-xl
            md:text-2xl
            text-white
            mt-1
            sm:mt-2
          "
        >
          Score: {score}
        </p>

      </div>


      {/* Cards */}

      <div
        className="
          grid
          grid-cols-3

          gap-2
          sm:gap-4
          md:gap-5

          max-w-xs
          sm:max-w-sm
          md:max-w-md

          mx-auto

          bg-slate-500

          p-3
          sm:p-4
          md:p-5

          rounded-xl
        "
      >

        {cards.map((card) => {

          const showImage =
            flipped.includes(card.id) ||
            matched.includes(card.id);

          return (

            <div
              key={card.id}
              className="
                aspect-square
                p-1
                sm:p-2

                bg-zinc-100

                flex
                justify-center
                items-center

                rounded-lg
              "
            >

              <div
                onClick={() => handleCardClick(card)}
                className="
                  w-full
                  h-full

                  p-1
                  sm:p-2

                  bg-purple-600

                  rounded-lg
                  sm:rounded-xl

                  cursor-pointer
                  overflow-hidden

                  flex
                  justify-center
                  items-center

                  shadow-lg

                  hover:scale-105
                  active:scale-95

                  transition
                  duration-200
                "
              >

                {showImage ? (

                  <img
                    src={card.image}
                    alt={card.value}
                    className="
                      w-full
                      h-full
                      object-contain
                    "
                  />

                ) : (

                  <span
                    className="
                      text-3xl
                      sm:text-5xl
                      md:text-6xl

                      text-white
                      font-bold
                    "
                  >
                    ?
                  </span>

                )}

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}

