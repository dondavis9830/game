
import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function GameZone() {

  const handleScreenClick = () => {
    // Send a custom event to BgMusic
    window.dispatchEvent(new Event("startMusic"))
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
          src="/videos/play1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Game Cards */}
        <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10">

          <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* Game Card 1 */}
            <div className="w-full overflow-hidden bg-pink-950 p-1 rounded-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">

              <img
                className="w-full aspect-video object-cover rounded-lg"
                src="https://img-eshop.cdn.nintendo.net/i/42e0380aea580ef8f36499fc4bf2080f04f85ad4a3ec08fc17ffbe49457f4f35.jpg"
                alt="Coming Soon"
              />

              <h1 className="text-center text-lg sm:text-xl text-white p-3">
                Coming Soon
              </h1>

            </div>


            {/* Game Card 2 */}
            <Link
              to="/game-home"
              className="w-full"
            >

              <div className="w-full overflow-hidden bg-pink-950 p-1 rounded-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">

                <img
                  className="w-full aspect-video object-cover rounded-lg"
                  src="https://store-images.s-microsoft.com/image/apps.54588.14090654178473619.aa2706f7-9244-4d37-b59f-3f87f7589476.6a5a6db1-70ba-4b57-a879-7f9264cd3a40?mode=scale&q=90&h=1080&w=1920"
                  alt="Game"
                />

                <h1 className="text-center text-lg sm:text-xl text-white p-3">
                  Let's Start
                </h1>

              </div>

            </Link>


            {/* Game Card 3 */}
            <div className="w-full overflow-hidden bg-pink-950 p-1 rounded-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">

              <img
                className="w-full aspect-video object-cover rounded-lg"
                src="https://cdn.mos.cms.futurecdn.net/tityNHYwviZdYVAiLuwFJn-1920-80.jpg"
                alt="Coming Soon"
              />

              <h1 className="text-center text-lg sm:text-xl text-white p-3">
                Coming Soon
              </h1>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

