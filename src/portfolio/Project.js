import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { GitHub, Link } from '@material-ui/icons'

function Project({ classN, proname, prodesk, imgsrc, altsrc, gitsrc, demosrc }) {
  return (
    <>
      <Container>
        <Row>
          <Col md='12'>
            <div className={classN}>
              <img className='projectImage' src={imgsrc} alt={altsrc} />
              <div className='projectTitles' >
                <div className='projectAbout'>
                  <h3 className='projectName'>{proname}</h3>
                  <p className='projectDescription'>{prodesk}</p>
                </div>
                <div className='projectButtons'>
                  <a href={gitsrc} target="_blank" className='buttons'>
                    Source < GitHub className='svg' />
                  </a>
                  <a href={demosrc} target="_blank" className='buttons'>
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