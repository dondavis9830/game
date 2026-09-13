
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './assets/pages/LandingPage'
import RegisterPage from './assets/pages/RegisterPage'
import LoginPage from './assets/pages/LoginPage'
import GameZone from './assets/pages/GameZone'
import GameHome from './assets/pages/GameHome'
import PlayingPage from './assets/pages/PlayingPage'
import Leaderboard from './assets/pages/Leaderboard'
import PageNotFound from './assets/pages/PageNotFound'
import BgMusic from "./assets/components/BgMusic";
import PlayingPage2 from './assets/pages/PlayingPage2'


function App() {

  return (
    <>
    <BgMusic/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/game-zone' element={<GameZone/>}/>
      <Route path='/game-home' element={<GameHome/>}/>
      <Route path='/play' element={<PlayingPage/>}/>
      <Route path='/play2' element={<PlayingPage2/>}/>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App
