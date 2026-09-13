
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate()
  const [name, setName] = useState('')

  const current = JSON.parse(localStorage.getItem('currentuser'))

  useEffect(() => {
    setName(current)
  }, [])

  const exit = () => {
    navigate('/')
  }

  const nav = () => {
    navigate('/game-home')
  }

  const zon = () => {
    navigate('/game-zone')
  }

  const led = () => {
    navigate('/game-home')
  }

  return (
    <div className='sticky top-0 z-[100]'>

      <nav className='
        w-full
        min-h-[70px]
        flex flex-col lg:flex-row
        justify-between items-center
        gap-3 lg:gap-0
        px-3 sm:px-5 lg:px-7
        py-3
        bg-slate-800
        bg-gradient-to-r
        from-purple-700
        via-indigo-600
        to-slate-950
      '>

        {/* Logo + Name + GAME ZONE */}
        <div className='
          w-full lg:w-auto
          flex flex-col sm:flex-row
          justify-center lg:justify-start
          items-center
          gap-2 sm:gap-4 lg:gap-0
        '>

          {/* Logo + Name */}
          <div className='flex items-center'>

            <div className='
              w-11 h-11
              sm:w-14 sm:h-14
              flex justify-center items-center
              p-2
              bg-blue-900
              rounded-full
              shrink-0
            '>
              <img
                src="./game.svg"
                alt=""
                className="w-full h-full"
              />
            </div>

            <h1 className='
              px-2 sm:px-3
              text-base sm:text-xl
              text-white
              truncate
              max-w-[100px]
              sm:max-w-none
            '>
              {name}
            </h1>

          </div>

          {/* GAME ZONE */}
          <div className='
            flex
            justify-center
            items-center
            px-2 sm:px-3
          '>
            <h1 className='
              text-white
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              whitespace-nowrap
            '>
              GAME ZONE
            </h1>
          </div>

        </div>


        {/* Navigation Buttons */}
        <div className='
          w-full lg:w-auto
          flex flex-wrap
          justify-center lg:justify-end
          items-center
          gap-x-4
          gap-y-2
          sm:gap-x-5
        '>

          <button
            className='
              text-sm
              sm:text-lg
              lg:text-xl
              text-white
              hover:text-purple-200
              transition
            '
            onClick={zon}
          >
            Zone
          </button>

          <button
            className='
              text-sm
              sm:text-lg
              lg:text-xl
              text-white
              hover:text-purple-200
              transition
            '
            onClick={nav}
          >
            Home
          </button>

          <button
            className='
              text-sm
              sm:text-lg
              lg:text-xl
              text-white
              hover:text-purple-200
              transition
            '
            onClick={led}
          >
            Leaderboard
          </button>

          <button
            id='/'
            className='
              text-sm
              sm:text-lg
              lg:text-xl
              text-white
              hover:text-red-300
              transition
            '
            onClick={exit}
          >
            logout
          </button>

        </div>

      </nav>

    </div>
  )
}

