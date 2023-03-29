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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              <div>
                <b>Lorem ipsum dolor amet?</b>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </span>
        </>
      </div>
    </>
  )
}

export default Main