import React, { useContext } from 'react';
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
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import search_icon from '../assets/search_icon.png'
import { FaUser } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HeaderNavbar() {
  const cartContext=useContext(CartContext);
  const cartNumber= cartContext.cartItemsNumber;
  const [search,setSearch]=useState('');
  console.log(search)
  const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
  return (
   <>
     <header className='d-flex justify-content-between pt-3'>
        <div className="logo-search d-flex ms-4">
        <span className='fw-bold fs-'>PariShop</span>
       <Form className="form ms-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" search"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
          <Link to={search}><img className='search-btn' src={search_icon} style={{height:'20px',width:'20px'}} /></Link>
       </Form>
        </div>
          <div className="signin d-flex">
            <div className=''><Link to='/login'><FontAwesomeIcon icon={FaUser}/>
            <span>Login | Signup</span>
            </Link></div>
            <div className="cart">
              {cartNumber<=0?<></>: <div className="cart-number text-center"><span className='p-1' >{cartNumber}</span></div>}
              <div><Link to='/cart'><img src={cart} alt="" style={{height:"40px"}} /></Link></div>
            </div>
          </div>
     </header>
     <main>
     <Navbar className="nav-bar bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to='/'  className='menu'>Home</Link></Nav.Link>
            <NavDropdown title="Products" 
              id="collasible-nav-dropdown" 
              show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            caret='false'
            className='menu' >
              <NavDropdown.Item ><Link to='/women'>women</Link></NavDropdown.Item>
              <NavDropdown.Item >
              <Link to='/men'>men</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to='/kid'>kids</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='menu'>  <Link to='/about'>About</Link></Nav.Link>
            <Nav.Link className='menu'>
            <Link to='/magazin'>Magazin</Link>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </main>
   </>
  );
}

export default HeaderNavbar;