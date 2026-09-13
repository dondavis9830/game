import React from 'react'

export default function PageNotFound() {

  const handleScreenClick = () => {
  // Send a custom event to BgMusic
  window.dispatchEvent(new Event("startMusic"));
  }

  return (
    <div onClick={handleScreenClick}
      className="w-full h-screen relative cursor-pointer" >
    <section className="relative w-full h-screen overflow-hidden">
      <video
        src="/videos/danger.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Your content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-yellow-300 text-6xl font-bold">
          Page Not Found 
        </h1>
       
      </div>

    </section>
    </div>
  )
}
