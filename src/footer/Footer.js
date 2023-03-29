import { Favorite } from '@material-ui/icons'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <p>©  Abdullajon Sayidov 2022 - {new Date().getFullYear()} | Made with <Favorite className='svg' /></p>
    </div>
  )
}

export default Footer