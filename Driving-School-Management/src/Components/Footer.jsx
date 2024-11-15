import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={{color:'yellow'}}>About Us</h5>
            <p>
              We provide high-quality services. Contact us for
              more information.
            </p>
          </Col>
          <Col md={4}>
            <h5 style={{color:'yellow'}}>Quick Links</h5>
      

            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#about" className="text-light">About</a></li>
              <li><a href="#services" className="text-light">Packages</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={{color:'yellow'}}>Follow Us</h5>
      
            <Link style={{color:'white', textDecoration:'none'}}><i class="fa-brands fa-twitter fa-2x mt-3 " ></i></Link>
            <Link style={{color:'white', textDecoration:'none'}}><i class="fa-brands fa-facebook fa-2x ms-3"></i></Link>
      <Link style={{color:'white', textDecoration:'none'}}><i class="fa-brands fa-reddit fa-2x ms-3"></i></Link>
      <Link style={{color:'white', textDecoration:'none'}}><i class="fa-brands fa-instagram fa-2x ms-3"></i></Link>


            
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
