// import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import myImage from "../img/photoforweb.png"
import { Facebook, GitHub, Instagram, Telegram } from '@material-ui/icons'

// import { Telegram } from '@mui/icons-material';
// import db from '../firebase/config'


function Aboutinfo() {

  // const [portfolios, setPortfolios] = useState([])
  // useEffect(() => {
  //   db.collection('portfolio').onSnapshot((snapshot) => {
  //     setPortfolios(snapshot.docs.map(doc => doc.data))
  //   })
  // }, [])

  return (
    <div className='aboutinfo'>
      <div className='side2'>
        <img src={myImage} alt='my image' />
      </div>
      <div className='side1'>
        <h1 className='title'>Hi, I'm Abdullajon!</h1>
        <p className='description'>Frontend Developer, IT engineer from Uzbekistan, Fergana region. Welcome to my  personal website. </p>
        <div className='buttons' >
          <Link className='linkBtn' to="./">
            Aboute me
          </Link>
          <Link className='linkBtn' to="./">
            Portfolio
          </Link>
        </div>
        <div className='socialNet'>
          <a className='socLinks' href='#' target='_blank'><Telegram className='iconSvg' /></a>
          <a className='socLinks' href='#' target='_blank'><Instagram className='iconSvg' /></a>
          <a className='socLinks' href='#' target='_blank'><Facebook className='iconSvg' /></a>
          <a className='socLinks' href='#' target='_blank'><GitHub className='iconSvg' /></a>




        </div>
      </div>


    </div>
  )
}

export default Aboutinfo