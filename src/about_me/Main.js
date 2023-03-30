import React from 'react'
import myImage2 from '../img/aboutimg.jpg'

function Main() {
  return (
    <>
      <div className='aboutmeMain'>
        <>
          <img src={myImage2} alt='photo aboute me' className='myImage'></img>
          <span>
            <p className='aboutmeText'>
              Hi.
              My name is Abdullajon. I'm from Fergana region Uzbekistan. I've been working as communications engineer at a mobile company 17 years. I've come to a point where I want some change.
              <div>
                <b>At the beginning of 2022 I finally fully commited to learning front-end development. </b>
              </div>
              I created this website to present my current skills and examples of my code, which could possibly help me find my first job as a junior front-end developer.
            </p>
          </span>
        </>
      </div>
    </>
  )
}

export default Main