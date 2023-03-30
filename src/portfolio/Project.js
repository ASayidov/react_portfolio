import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { GitHub, Link } from '@material-ui/icons'
import PortProjectImg from "../img/portfolioPrject.png"
import weatherImg from "../img/weatherApp.png"
import toDoImg from "../img/toDoList.png"
import currConvertor from "../img/currconvertor.png"

function Project() {
  return (
    <>
      <Container>
        <Row>
          <Col md='12'>
            <div className='projectCard'>
              <img className='projectImage' src={PortProjectImg} alt='ToDo project image' />
              <div className='projectTitles' >
                <div className='projectAbout'>
                  <h3 className='projectName'>Portfolio for Designer</h3>
                  <p className='projectDescription'>Html, CSS, JS project</p>
                </div>
                <div className='projectButtons'>
                  <a href='https://github.com/ASayidov/portfolio-html_css' target='_blank' className='buttons'>
                    Source < GitHub className='svg' />
                  </a>
                  <a href='https://portfoliowebfordev.netlify.app' target='_blank' className='buttons'>
                    Demo <Link className='svg' />
                  </a>
                </div>
              </div>
            </div>

            <div className='projectCard zig'>
              <img className='projectImage' src={toDoImg} alt='ToDo project image' />
              <div className='projectTitles' >
                <div className='projectAbout'>
                  <h3 className='projectName'>ToDo List</h3>
                  <p className='projectDescription'>Html, CSS(bootstrap), JS project</p>
                </div>
                <div className='projectButtons'>
                  <a href='https://github.com/ASayidov/CRUD-TodoList' target='_blank' className='buttons'>
                    Source < GitHub className='svg' />
                  </a>
                  <a href='https://samtodocrud.netlify.app' target='_blank' className='buttons'>
                    Demo <Link className='svg' />
                  </a>
                </div>
              </div>
            </div>

            <div className='projectCard'>
              <img className='projectImage' src={weatherImg} alt='ToDo project image' />
              <div className='projectTitles' >
                <div className='projectAbout'>
                  <h3 className='projectName'>Weather App</h3>
                  <p className='projectDescription'>Html, CSS(bootstrap), JS project</p>
                </div>
                <div className='projectButtons'>
                  <a href='https://github.com/ASayidov/weatherApp' target='_blank' className='buttons'>
                    Source < GitHub className='svg' />
                  </a>
                  <a href='https://bysamweather.netlify.app' target='_blank' className='buttons'>
                    Demo <Link className='svg' />
                  </a>
                </div>
              </div>
            </div>

            <div className='projectCard zig'>
              <img className='projectImage' src={currConvertor} alt='Currency convertor image' />
              <div className='projectTitles' >
                <div className='projectAbout'>
                  <h3 className='projectName'>Currency Converter</h3>
                  <p className='projectDescription'>Html, CSS(bootstrap), JS project</p>
                </div>
                <div className='projectButtons'>
                  <a href='https://github.com/ASayidov/Currency-Converter' target='_blank' className='buttons'>
                    Source < GitHub className='svg' />
                  </a>
                  <a href='https://samcurrencyconvert.netlify.app' target='_blank' className='buttons'>
                    Demo <Link className='svg' />
                  </a>
                </div>
              </div>
            </div>

          </Col>



        </Row>

      </Container>




    </>
  )
}

export default Project