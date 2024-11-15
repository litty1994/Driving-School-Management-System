import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaCar, FaMotorcycle, FaCarSide } from 'react-icons/fa';
import './ChoosePackage.css';
const Choosepackage = () => {
    
    const packages = [
      {
        id: 1,
        title: 'Car Package',
        description: 'Learn to drive a car with professional guidance.',
        icon: <FaCar size={40} />,
        color: 'info',
      },
      {
        id: 2,
        title: 'Two wheeler Package',
        description: 'Master scooter driving with hands-on training.',
        icon: <FaMotorcycle size={40} />,
        color: 'success',
      },
      {
        id: 3,
        title: 'Car & Scooter Package',
        description: 'Get comprehensive training for both car and scooter.',
        icon: <FaCarSide size={40} />,
        color: 'primary',
      },
    ];
  return (
    <Container className="choose-package py-5">
    <h3 className="text-center mb-4">Choose Your Package</h3>
    <Row className="justify-content-center">
      {packages.map((pkg) => (
        <Col md={6} lg={4} className="mb-4" key={pkg.id}>
          <Card className={`text-center package-card border-${pkg.color}`}>
            <Card.Body>
              <div className={`icon-container text-${pkg.color}`}>
                {pkg.icon}
              </div>
              <Card.Title className="my-3">{pkg.title}</Card.Title>
              <Card.Text>{pkg.description}</Card.Text>
              <Button variant={pkg.color} className="mt-3">
                Select {pkg.title}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
   
  )
}

export default Choosepackage