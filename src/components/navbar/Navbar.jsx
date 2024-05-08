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
    <Navbar expand="lg" className="nav-bar bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" style={{height:"40px"}} />
          <span className='fw-bold fs-'>PariShop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="./" className='menu'>Home</Nav.Link>
            <NavDropdown title="Products" 
              id="collasible-nav-dropdown" 
              show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            caret={false}
            className='menu' >
              <NavDropdown.Item href="./women">Women</NavDropdown.Item>
              <NavDropdown.Item href="men">
                Men
              </NavDropdown.Item>
              <NavDropdown.Item href="kids">
                kids
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className='menu'>About</Nav.Link>
            <Nav.Link href="#" className='menu'>
              Magazin
            </Nav.Link>
          </Nav>
          <Form className="d-flex form">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" search"
              aria-label="Search"
            />
           
          </Form>
          <div className="signin d-flex justify-content-between ms-4">
            <img src={user} alt="" style={{height:"40px"}} />
            <img src={cart} alt="" style={{height:"40px"}} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;