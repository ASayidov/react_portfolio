import React from 'react'
import NavSec from '../home/NavSec'
import Reveal from 'react-reveal/Reveal'
import PageInfo from './PageInfo'
import Project from './Project'
import Footer from '../footer/Footer'
import PortProjectImg from "../img/portfolioPrject.png"
import weatherImg from "../img/weatherApp.png"
import toDoImg from "../img/toDoList.png"
import currConvertor from "../img/currconvertor.png"
import { Link } from '@material-ui/icons'


function Portfolio() {

  const projects = [
    {
      'id': 1,
      "classes": 'projectCard',
      "proname": 'Portfolio for Designer',
      'prodesk': 'Html, CSS, JS project',
      'imgsrc': PortProjectImg,
      'altsrc': 'Portfolio for Designer',
      'gitsrc': 'https://github.com/ASayidov/portfolio-html_css',
      'demosrc': 'https://portfoliowebfordev.netlify.app'

    },
    {
      'id': 2,
      "classes": 'projectCard zig',
      "proname": 'ToDo List',
      "prodesk": "Create, remove, update, edit, delete list , JS project",
      'imgsrc': toDoImg,
      'altsrc': 'ToDo project image',
      'gitsrc': 'https://github.com/ASayidov/CRUD-TodoList',
      'demosrc': 'https://samtodocrud.netlify.app'

    },
    {
      'id': 3,
      "classes": 'projectCard',
      "proname": 'Weather App',
      'prodesk': 'Html, CSS, JS project',
      'imgsrc': weatherImg,
      'altsrc': 'Weather project image',
      'gitsrc': 'https://github.com/ASayidov/weatherApp',
      'demosrc': 'https://bysamweather.netlify.app'

    },
    {
      'id': 4,
      "classes": 'projectCard zig',
      "proname": 'Currency Converter',
      'prodesk': 'Html, CSS, JS project',
      'imgsrc': currConvertor,
      'altsrc': 'Currency convertor image',
      'gitsrc': 'https://github.com/ASayidov/Currency-Converter',
      'demosrc': 'https://samcurrencyconvert.netlify.app'
    }
  ]


  return (
    <>
      <Reveal effect='animNav' duration="750">
        <NavSec />
      </Reveal>
      <Reveal effect='fadeInUp' duration="1250">
        <PageInfo />
      </Reveal>
      <Reveal effect='portfolioAnim' duration="1700">
        {projects.map((value, id) => {
          return <Project key={id} classN={value.classes} proname={value.proname} prodesk={value.prodesk} imgsrc={value.imgsrc} altsrc={value.altsrc} gitsrc={value.gitsrc} demosrc={value.demosrc} />
        })}
        <a href='https://app.netlify.com/teams/asayidov/sites' target="_blank" className='buttons-all'>
          Other projects <Link className='svg' />
        </a>
      </Reveal>
      <Footer />
    </>
  )
}

export default Portfolio