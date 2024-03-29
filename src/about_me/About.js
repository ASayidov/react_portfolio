import React from 'react'
import NavSec from '../home/NavSec'
import PageInfo from './PageInfo'
import Main from './Main'
import { Reveal } from 'react-reveal'
import Footer from '../footer/Footer'



function About() {
  return (
    <>
      <Reveal effect='animNav' duration="750">
        <NavSec />
      </Reveal>
      <Reveal effect='fadeInUp' duration="1250">
        <PageInfo />
      </Reveal>
      <Main />
      <Footer />



    </>

  )
}

export default About