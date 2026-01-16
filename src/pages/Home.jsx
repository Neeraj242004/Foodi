import React from 'react'
import Hero from '../Component/Hero'
import About from '../Component/About'
import Menu from '../Component/Menu'
import Reservation from '../Component/Reservation '
import Contact from '../Component/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Menu/>
      <Reservation/>
      <Contact/>
    </div>
  )
}

export default Home