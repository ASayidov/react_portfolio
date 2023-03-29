import React from 'react'
import NavSec from '../home/NavSec'
import Reveal from 'react-reveal/Reveal'

function Portfolio() {
  return (
    <>
      <Reveal effect='animNav' duration="750">
        <NavSec />
      </Reveal>
    </>
  )
}

export default Portfolio