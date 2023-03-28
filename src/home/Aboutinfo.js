import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import myImage from "../img/photoforweb.png"
// import db from '../firebase/config'


function Aboutinfo() {

  const [portfolios, setPortfolios] = useState([])
  // useEffect(() => {
  //   db.collection('portfolio').onSnapshot((snapshot) => {
  //     setPortfolios(snapshot.docs.map(doc => doc.data))
  //   })
  // }, [])

  return (
    <div className='aboutInfo'>
      <div className='side2'>
        <img src={myImage} alt='my image' />
      </div>
      <div className='side1'>
        <h1>Hi, I'm Abdullajon!</h1>
        <p>Frontend Developer, IT engineer from Uzbekistan, Fergana region. Welcome to my  personal website. Frontend Developer, IT engineer from Uzbekistan, Fergana region. Welcome to my  personal website.</p>
        <div className='buttons' >
          <Link className='linkBtn' to="./">
            Aboute me
          </Link>
          <Link className='linkBtn' to="./">
            Portfolio
          </Link>
        </div>
        <div className='socialNet'>
          <a href='#' target='_blank'></a>
          <a href='#' target='_blank'></a>
          <a href='#' target='_blank'></a>
          <a href='#' target='_blank'></a>
        </div>
      </div>


    </div>
  )
}

export default Aboutinfo