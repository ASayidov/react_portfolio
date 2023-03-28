import React from 'react'
import NavSec from './NavSec'
import Reveal from 'react-reveal/Reveal'
import Aboutinfo from './Aboutinfo'

function HomeMain() {
  return (
    <>
      <Reveal effect='animNav'>
        <NavSec />
      </Reveal>
      <Aboutinfo />

    </>
  )
}

export default HomeMain