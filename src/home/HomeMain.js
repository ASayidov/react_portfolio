import React from 'react'
import NavSec from './NavSec'
import Reveal from 'react-reveal/Reveal'
import Aboutinfo from './Aboutinfo'
import Footer from '../footer/Footer'

function HomeMain() {
  return (
    <>
      <Reveal effect='animNav' duration="750">
        <NavSec />
      </Reveal>
      <Aboutinfo />
      <Footer />

    </>
  )
}

export default HomeMain