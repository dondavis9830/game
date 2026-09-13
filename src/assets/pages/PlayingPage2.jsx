import React, { useState } from "react";
import Header from "../components/Header";

export default function PlayingPage2({ onNext }) {
  const cards = [
    { id: 1, value: "1", image: "/image/space.svg" },
    { id: 2, value: "2", image: "/image/pineapple.svg" },
    { id: 3, value: "3", image: "/image/moon.svg" },
    { id: 13, value: "10", image: "/image/stump.svg" },
    { id: 14, value: "2", image: "/image/pineapple.svg" },
    { id: 15, value: "9", image: "/image/deer.svg" },
    { id: 8, value: "8", image: "/image/lipstick.svg" },
    { id: 9, value: "3", image: "/image/moon.svg" },
    { id: 10, value: "8", image: "/image/lipstick.svg" },
    { id: 11, value: "7", image: "/image/chair.svg" },
    { id: 12, value: "4", image: "/image/crown.svg" },
    { id: 19, value: "6", image: "/image/brush.svg" },
    { id: 20, value: "10", image: "/image/stump.svg" },
    { id: 21, value: "11", image: "/image/apple.svg" },
    { id: 22, value: "12", image: "/image/auto.svg" },
    { id: 37, value: "11", image: "/image/apple.svg" },
    { id: 25, value: "15", image: "/image/earth.svg" },
    { id: 26, value: "15", image: "/image/earth.svg" },
    { id: 27, value: "16", image: "/image/football.svg" },
    { id: 28, value: "17", image: "/image/lion.svg" },
    { id: 23, value: "13", image: "/image/bat.svg" },
    { id: 24, value: "14", image: "/image/bottle.svg" },
    { id: 16, value: "9", image: "/image/deer.svg" },
    { id: 17, value: "5", image: "/image/computer.svg" },
    { id: 18, value: "1", image: "/image/space.svg" },
    { id: 4, value: "4", image: "/image/crown.svg" },
    { id: 5, value: "5", image: "/image/computer.svg" },
    { id: 6, value: "6", image: "/image/brush.svg" },
    { id: 7, value: "7", image: "/image/chair.svg" },
    { id: 33, value: "19", image: "/image/pencil.svg" },
    { id: 34, value: "12", image: "/image/auto.svg" },
    { id: 29, value: "18", image: "/image/orange.svg" },
    { id: 30, value: "13", image: "/image/bat.svg" },
    { id: 31, value: "17", image: "/image/lion.svg" },
    { id: 32, value: "14", image: "/image/bottle.svg" },
    { id: 38, value: "20", image: "/image/train.svg" },
    { id: 35, value: "16", image: "/image/football.svg" },
    { id: 36, value: "18", image: "/image/orange.svg" },
    { id: 39, value: "19", image: "/image/pencil.svg" },
    { id: 40, value: "20", image: "/image/train.svg" },
  ];

  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const matchSound = new Audio("/music/correct.mp3");
  const wrongSound = new Audio("/music/wrong.mp3");

  const handleCardClick = (card) => {
    if (gameOver || flipped.includes(card.id) || matched.includes(card.id) || flipped.length === 2) return;

    const newFlipped = [...flipped, card.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 1) return;

    const firstCard = cards.find((item) => item.id === newFlipped[0]);
    const secondCard = cards.find((item) => item.id === newFlipped[1]);

    if (firstCard.value === secondCard.value) {
      const newMatched = [...matched, firstCard.id, secondCard.id];

      setMatched(newMatched);
      setFlipped([]);

      matchSound.currentTime = 0;
      matchSound.play();

      if (currentPlayer === 1) {
        setPlayer1Score((prev) => prev + 50);
      } else {
        setPlayer2Score((prev) => prev + 50);
      }

      if (newMatched.length === cards.length) {
        setGameOver(true);
      }
    } else {

      if (currentPlayer === 1) {
        setPlayer1Score((prev) => prev - 5);
      } else {
        setPlayer2Score((prev) => prev - 5);
      }

      wrongSound.currentTime = 0;
      wrongSound.play();

      setTimeout(() => {
        setFlipped([]);
        setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
      }, 1000);
    }
  };

  const handleScreenClick = () => {
    window.dispatchEvent(new Event("startMusic"));
  };

  const winner =  player1Score > player2Score ? "Player 1 Wins 🎉" : player2Score > player1Score ? "Player 2 Wins 🎉" : "It's a Draw 🤝";

  return (
    <div onClick={handleScreenClick} className="w-full min-h-screen relative overflow-x-hidden cursor-pointer">
      <Header />

      <section className="w-full min-h-[calc(100vh-70px)] flex flex-col justify-center items-center px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">

        {/* Players Score */}
        <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-4">
          <div className={`w-full sm:w-auto min-w-[150px] px-5 py-2 rounded-xl text-center text-white shadow-lg ${currentPlayer === 1 ? "bg-green-600 scale-105" : "bg-purple-700"}`}>
            <h2 className="text-lg sm:text-xl font-bold">Player 1</h2>
            <p className="text-2xl sm:text-3xl font-bold">{player1Score}</p>
          </div>

          <div className="text-white text-xl sm:text-2xl font-bold">VS</div>

          <div className={`w-full sm:w-auto min-w-[150px] px-5 py-2 rounded-xl text-center text-white shadow-lg ${currentPlayer === 2 ? "bg-green-600 scale-105" : "bg-purple-700"}`}>
            <h2 className="text-lg sm:text-xl font-bold">Player 2</h2>
            <p className="text-2xl sm:text-3xl font-bold">{player2Score}</p>
          </div>
        </div>

        {/* Current Player */}
        {!gameOver && (
          <div className="mb-4 px-5 py-2 bg-black/60 rounded-full text-white text-base sm:text-xl font-bold">
            Player {currentPlayer}'s Turn
          </div>
        )}

        {/* Winner */}
        {gameOver && (
          <div className="mb-5 text-center bg-yellow-400 px-6 py-4 rounded-2xl shadow-xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-black">{winner}</h1>
            <p className="text-base sm:text-lg font-semibold mt-1">
              Player 1: {player1Score} | Player 2: {player2Score}
            </p>
          </div>
        )}

        {/* Game Board */}
        <div className="w-full max-w-7xl mx-auto p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-2xl bg-gradient-to-bl from-purple-700 via-pink-700 to-blue-950 shadow-2xl">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 w-full bg-slate-500 p-2 sm:p-3 md:p-4 rounded-xl">
            {cards.map((card) => {
              const showImage = flipped.includes(card.id) || matched.includes(card.id);

              return (
                <div key={card.id} className="aspect-square p-0.5 sm:p-1 md:p-1.5 bg-zinc-100 flex justify-center items-center rounded-md sm:rounded-lg">
                  <div onClick={() => handleCardClick(card)} className="w-full h-full p-1 sm:p-1.5 bg-purple-600 rounded-md sm:rounded-lg md:rounded-xl cursor-pointer overflow-hidden flex justify-center items-center shadow-lg hover:scale-105 active:scale-95 transition duration-200">
                    {showImage ? (
                      <img src={card.image} alt={card.value} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-white font-bold">{card.id}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
}