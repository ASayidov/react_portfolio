import { Link } from 'react-router-dom'
import myImage from "../img/photoforweb.png"
import { Facebook, GitHub, Instagram, Telegram, Email } from '@material-ui/icons'
import { Reveal } from 'react-reveal'




function Aboutinfo() {

  return (
    <div className='aboutinfo'>
      <div className='side2'>
        <img className='myImage' src={myImage} alt='my image' />
      </div>
      <div className='side1'>
        <Reveal effect="fadeInUp" duration='1250'>
          <h1 className='title'>Hi, I'm Abdullajon!</h1>
          <p className='description'>Frontend Developer, IT engineer from Uzbekistan, Fergana region. Welcome to my  personal website. </p>
        </Reveal>
        <div className='buttons' >
          <Link className='linkBtn' to="./about-me">
            Aboute me
          </Link>
          <Link className='linkBtn' to="./portfolio">
            Portfolio
          </Link>
        </div>
        <div className='socialNet'>
          <a className='socLinks' href='https://t.me/net284' target='_blank'><Telegram className='iconSvg' /></a>
          <a className='socLinks' href='mailto:abdullajonsayidov@gmail.com' target='_blank'><Email className='iconSvg' /></a>
          <a className='socLinks' href='https://www.facebook.com/profile.php?id=100005418257998' target='_blank'><Facebook className='iconSvg' /></a>
          <a className='socLinks' href='https://github.com/ASayidov' target='_blank'><GitHub className='iconSvg' /></a>
        </div>
      </div>


    </div>
  )
}

export default Aboutinfo