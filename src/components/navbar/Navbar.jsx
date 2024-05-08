import React from 'react';
import '../navbar/Navbar.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import user from '../assets/user.png'

function HeaderNavbar() {
  const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" style={{height:"40px"}} />
          <span className='fw-bold fs-'>PariShop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Products" 
              id="collasible-nav-dropdown" 
              show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            caret={false} >
              <NavDropdown.Item href="#action3">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Men
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Children
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#" >
              Magazin
            </Nav.Link>
          </Nav>
          <Form className="d-flex form">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="signin d-flex justify-content-between ms-5">
            <img src={user} alt="" style={{height:"40px"}} />
            <img src={cart} alt="" style={{height:"40px"}} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;