import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { GitHub, Link } from '@material-ui/icons'
import PortProjectImg from "../img/portfolioPrject.png"
import weatherImg from "../img/weatherApp.png"
import toDoImg from "../img/toDoList.png"

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
                  <h3 className='projectName'>Project name</h3>
                  <p className='projectDescription'>Project description</p>
                </div>
                <div className='projectButtons'>
                  <a href='#' target='_blank' className='buttons'>
                    Source < GitHub className='svg' />
                  </a>
                  <a href='#' target='_blank' className='buttons'>
                    Demo <Link className='svg' />
                  </a>
                </div>
              </div>
            </div>

            <div className='projectCard zig'>
              <img className='projectImage' src={toDoImg} alt='ToDo project image' />
              <div className='projectTitles' >
                <div className='projectAbout'>
                  <h3 className='projectName'>Project name</h3>
                  <p className='projectDescription'>Project description</p>
                </div>
                <div className='projectButtons'>
                  <a href='#' target='_blank' className='buttons'>
                    Source < GitHub className='svg' />
                  </a>
                  <a href='#' target='_blank' className='buttons'>
                    Demo <Link className='svg' />
                  </a>
                </div>
              </div>
            </div>

            <div className='projectCard'>
              <img className='projectImage' src={weatherImg} alt='ToDo project image' />
              <div className='projectTitles' >
                <div className='projectAbout'>
                  <h3 className='projectName'>Project name</h3>
                  <p className='projectDescription'>Project description</p>
                </div>
                <div className='projectButtons'>
                  <a href='#' target='_blank' className='buttons'>
                    Source < GitHub className='svg' />
                  </a>
                  <a href='#' target='_blank' className='buttons'>
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