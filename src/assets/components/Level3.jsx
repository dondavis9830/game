import React, { useState } from "react";

export default function Level3({ onNext }) {
  const cards = [
    { id: 1, value: "1", image: "/image/space.svg" },
    { id: 2, value: "2", image: "/image/pineapple.svg" },
    { id: 3, value: "3", image: "/image/moon.svg" },
    { id: 4, value: "4", image: "/image/crown.svg" },
    { id: 5, value: "5", image: "/image/computer.svg" },
    { id: 6, value: "6", image: "/image/brush.svg" },
    { id: 7, value: "7", image: "/image/chair.svg" },
    { id: 8, value: "8", image: "/image/lipstick.svg" },
    { id: 9, value: "3", image: "/image/moon.svg" },
    { id: 10, value: "8", image: "/image/lipstick.svg" },
    { id: 11, value: "7", image: "/image/chair.svg" },
    { id: 12, value: "4", image: "/image/crown.svg" },
    { id: 13, value: "10", image: "/image/stump.svg" },
    { id: 14, value: "2", image: "/image/pineapple.svg" },
    { id: 15, value: "9", image: "/image/deer.svg" },
    { id: 16, value: "9", image: "/image/deer.svg" },
    { id: 17, value: "5", image: "/image/computer.svg" },
    { id: 18, value: "1", image: "/image/space.svg" },
    { id: 19, value: "6", image: "/image/brush.svg" },
    { id: 20, value: "10", image: "/image/stump.svg" },
  ];

  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  const Name = JSON.parse(localStorage.getItem("currentuser"));
  const newscore = JSON.parse(localStorage.getItem(`SCORE${Name}`)) || 0;
  const [score, setScore] = useState(newscore);

  const matchSound = new Audio("/music/correct.mp3");
  const wrongSound = new Audio("/music/wrong.mp3");

  localStorage.setItem(`SCORE${Name}`, JSON.stringify(score));

  const highScore = JSON.parse(localStorage.getItem(`highscore${Name}`)) || 0;

  if (score > highScore) {
    localStorage.setItem(`highscore${Name}`, JSON.stringify(score));
  }

  const handleCardClick = (card) => {
    if (flipped.includes(card.id) || matched.includes(card.id) || flipped.length === 2) return;

    const newFlipped = [...flipped, card.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 1) return;

    const firstCard = cards.find((item) => item.id === newFlipped[0]);
    const secondCard = cards.find((item) => item.id === newFlipped[1]);

    if (firstCard.value === secondCard.value) {
      const newMatched = [...matched, firstCard.id, secondCard.id];
      setMatched(newMatched);

      matchSound.currentTime = 0;
      matchSound.play();

      setScore((prev) => prev + 100);
      setFlipped([]);

      if (newMatched.length === cards.length) {
        setTimeout(() => onNext(), 700);
      }
    } else {
      wrongSound.currentTime = 0;
      wrongSound.play();

      setScore((prev) => prev - 10);

      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto p-3 sm:p-4 md:p-6 rounded-2xl bg-gradient-to-bl from-purple-700 via-pink-700 to-blue-950 shadow-2xl">

      <div className="text-center mb-3 sm:mb-5 md:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Level 3</h1>
        <p className="text-base sm:text-xl md:text-2xl text-white mt-1 sm:mt-2">Score: {score}</p>
      </div>

      <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-3 lg:gap-4 w-full bg-slate-500 p-2 sm:p-3 md:p-4 lg:p-5 rounded-xl">
        {cards.map((card) => {
          const showImage = flipped.includes(card.id) || matched.includes(card.id);

          return (
            <div key={card.id} className="aspect-square p-1 sm:p-1.5 md:p-2 bg-zinc-100 flex justify-center items-center rounded-md sm:rounded-lg">
              <div onClick={() => handleCardClick(card)} className="w-full h-full p-1 sm:p-1.5 md:p-2 bg-purple-600 rounded-md sm:rounded-lg md:rounded-xl cursor-pointer overflow-hidden flex justify-center items-center shadow-lg hover:scale-105 active:scale-95 transition duration-200">
                {showImage ? (
                  <img src={card.image} alt={card.value} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold">{card.id}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}