import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BgMusic() {
  const audioRef = useRef(null);
  const location = useLocation();

  const [isMuted, setIsMuted] = useState(false);

  const musicList = {
    "/": "/music/home.mp3",
    "/register": "/music/home.mp3",
    "/login": "/music/home.mp3",
    "/game-zone": "/music/game.mp3",
    "/game-home": "/music/game.mp3",
    "/play": "/music/play.mp3",
    "*": "/music/jump.mp3",
  };

  const currentMusic =
    musicList[location.pathname] || "/music/home.mp3";

  // Change music when route changes
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.src = currentMusic;
    audio.load();

    
    // Try to continue playing
    audio.play().catch(() => {
      console.log("Waiting for user click...");
    });
  }, [currentMusic]);

  // Start music when screen/button is clicked
  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current;

      if (!audio) return;

      audio.play()
        .then(() => {
          console.log("Music started");
        })
        .catch((error) => {
          console.log("Music error:", error);
        });
    };

    window.addEventListener("startMusic", startMusic);

    return () => {
      window.removeEventListener("startMusic", startMusic);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      />

      <button
        onClick={toggleMute}
        className="fixed bottom-5 right-5 z-[9999]
        bg-purple-600 hover:bg-purple-700
        text-white px-4 py-3
        rounded-full shadow-lg"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </>
  );
}