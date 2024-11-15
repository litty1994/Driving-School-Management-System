import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
   <>
    
<Navbar expand="lg" bg="primary" >
      <Container>
      
        <Navbar.Brand href="#home" className='text-light fw-bold'> Omega Driving School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link >
            <Link to={'/'} style={{color:'white',textDecoration:'none'}}>
            Home</Link>
              </Nav.Link>
          <Nav.Link >
              <Link to={'/About'} style={{color:'white',textDecoration:'none'}}>
              About</Link>
              </Nav.Link>
              <Nav.Link >
            <Link to={'/Course'} style={{color:'white',textDecoration:'none'}}>
            Courses</Link>
              </Nav.Link> 
             



{/* <NavDropdown title={<span style={{ color: 'white' }}>Courses</span>}  id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Course" >Motor Cycle & Scooter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Course">
                Car Driving
              </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/Course">
               Both 2 and 4 wheeler
              </NavDropdown.Item>
            </NavDropdown> */}


            <Nav.Link >
            <Link to={'/SignUp'} style={{color:'white',textDecoration:'none'}}>
            SignUp</Link>
              </Nav.Link>
              <Nav.Link >
            <Link to={'/SignIn'} style={{color:'white',textDecoration:'none'}}>
            SignIn</Link>
              </Nav.Link>

            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   

   </>
  )
}

export default Header