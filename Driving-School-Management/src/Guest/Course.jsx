import React from 'react'
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap'

function Course() {
  
  
  const courses = [
    {
  title: "Motor Cycle and Scooter",
  price: "$99",
  description:[
    "Balance and control",
    "Basic Mechanical and Functional Detailing",
    "Braking and Emergency Braking",
    "Turns and U-turns",
    "Observation and Anticipation",
    "License Trial Practice"
  ],
  level: "Beginner",
  duration: "3 Week",
  imgSrc: "https://peakwaydrivingschools.com/wp-content/uploads/2020/07/1.jpg"
},
{
  title: "Car Driving",
  price: "$110",
  description: [
    "Theory classes on Daily and Weekly Visual and under bonnet checks. ",
    "Accelerator Setting",
    "Clutch Control",
    "Turns and U-turns",
    "Observation and Anticipation",
    "License Trial Practice"
  ],
  level: "Beginner",
  duration: "3 Week",
  imgSrc: "http://2.bp.blogspot.com/-4H38hIJR478/U4xDJFaNQ-I/AAAAAAAAAEc/_rtBtwbUAHA/s1600/City+West+Driving+School+1.jpg"
},
{
  title: "Both Car and Two wheeler",
  price: "$150",
  description: [
    "Greate Discount",
    "Time Saving",
    "Greater Flexibility",
    "Enhanced Road Skills",
    
  ],
  level: "Beginner",
  duration: "3 Week",
  imgSrc: "https://blog.mccarthyautogroup.com/wp-content/uploads/sites/84/2021/11/Passing-Drivers-Test-in-Kansas-City-640x428.jpg"
}
];

return (
  <Container fluid className="py-6">
  <Container>
    <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: "500px" }}>
      <h6 className="text-primary text-uppercase my-4">Trending Courses</h6>
      <h1 className="display-6 mb-4">Our Courses Upskill You With Driving Training</h1>
    </div>

    <Row className="g-4 justify-content-center">
      {courses.map((course, index) => (
        <Col lg={4} md={6} key={index} >
          <Card className="h-100">
            <Card.Img variant="top" src={course.imgSrc} height={'300px'} />
            <Card.Body className="d-flex flex-column">
              <div className="text-center">
                <div className="bg-primary text-white fs-5 py-1 px-4 mb-4 d-inline-block">{course.price}</div>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                <ul  style={{ textAlign: 'left' }}>
                      {course.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                </Card.Text>
                <Breadcrumb className="justify-content-center mb-0">
                  <Breadcrumb.Item className="small"  >
                    <i className="fa fa-signal text-primary me-2"></i>{course.level}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="small">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>{course.duration}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="mt-auto">
                
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</Container>
);
}

export default Course