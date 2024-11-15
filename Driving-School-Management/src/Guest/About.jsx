import React from 'react'
import { Col, Row } from 'react-bootstrap'

function About() {
  return (
    <>


      <div>
        <Row>
          <Col md={6} className=' p-4 d-flex align-items-center justify-content-center'>
            <img src="https://themewagon.github.io/drivin/img/about-1.jpg" alt="" width={'70%'} />



          </Col>
          <Col md={6}>
            <h4 className='p-4 text-warning'>About us</h4>
            <h5><b>We Help Students To Pass Test & Get A License On The First Try</b></h5>
            <p>Welcome to [Your Driving School Name], where our mission is to empower individuals with the skills and confidence they need to become safe and responsible drivers. Established in [Year], we have been serving the community with high-quality driving education and personalized training programs.

At [Your Driving School Name], we believe that learning to drive should be a positive and enjoyable experience. Our team of experienced and certified instructors is dedicated to providing top-notch instruction tailored to each student's unique needs. We offer a range of courses, from beginner lessons to advanced defensive driving techniques, ensuring that every student receives comprehensive training.</p>
            <Row >
            <Col md={6}>
              <p><i class="fa-solid fa-check "style={{color:'#FFD43B'}}></i>Fully Licenced</p>
              <p><i class="fa-solid fa-check "style={{color:'#FFD43B'}}></i>Afordable Fee</p>
            </Col>
            <Col md={6}>
            </Col>
            <p><i class="fa-solid fa-check "style={{color:'#FFD43B'}}></i>Best TRainers</p>
            <p><i class="fa-solid fa-check "style={{color:'#FFD43B'}}></i>Online Tracking</p>

          </Row>
          </Col>
          

        </Row>
      </div>
    </>
  )
}

export default About