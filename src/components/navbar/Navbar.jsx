import React, { useContext, useEffect } from "react";
import "../navbar/Navbar.css";
import "../navbar/responsiveNav.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import cart from "../assets/cart.png";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import  {Context}  from "../../Context/Context";
import search_icon from "../assets/search_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearchQuery } from "../../features/searchSlice";
import { selectCurrentUser } from "../../features/userSlice";

function HeaderNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch=useDispatch();

  const cartNumber = useSelector(state=>state.cart.totalQuantity);
  const searchQuery=useSelector(state=>selectSearch);
  const user=useSelector(selectCurrentUser);


  const [isScrolled, setIsScrolled] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);
  const[activeclass, setActiveClass]=useState("home");


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=>{
    if(location.pathname!== '/search'){
      dispatch(setSearchQuery(''))
      setSearchInput('')
    }
  },[location,dispatch])



  const showDropdown = () => setShow(true);
  const hideDropdown = () => setShow(false);

  const handleSearchInputChange = (e) =>  setSearchInput(e.target.value);

  const handleSearchClick = () => {
    if (searchInput.trim()) {
      dispatch(setSearchQuery(searchInput))
      navigate(`/search`);
    }
  };


  return (
    <>
      <div
        className={`top pt-3 pb-2 ${
          isScrolled ? "top-border" : " "
        } under-border`}
      >
        <div className="logo-search d-flex ms-4">
          <span className="logo ">
            <Link to="/">PariShop</Link>
          </span>
          <Form className="form ms-2" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search"
              className=" search"
              aria-label="Search"
              id="search-input"
              value={searchInput}
              onChange={handleSearchInputChange}
            />

            <img
              onClick={handleSearchClick}
              className="search-btn"
              src={search_icon}
              style={{ height: "20px", width: "20px" }}
            />
          </Form>
        </div>
        <div className="signin-cart d-flex">
          <div className="account">
          <Link to={user.username!==''?'/user':'/login'}>
              <FontAwesomeIcon icon={faRightToBracket} size="lg" />
       {user.username!==''?user.username :<span className="">Login | Signup</span>}
            </Link>
          </div>
          
          <div className="cart ms-3 text-center">
            {cartNumber <= 0 ? (
              <></>
            ) : (
              <span className="cart-number">{cartNumber}</span>
            )}
            <Link to="/cart">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className="icon ms-2"
              size="xl"
            />
            </Link>
          </div>

        </div>
      </div>

      <Navbar
        className={`nav-bar bg-body-tertiary ${isScrolled ? "hidden" : " "}`}
      >
        <Container fluid>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="nav">
              <Nav.Link as={NavLink} onClick={()=>setActiveClass('home')} to="/" className={`menu-list ${activeclass==='home'?"activeclass": ''} `}>
                Home
              </Nav.Link>
              <NavDropdown
                as={NavLink}
                title="Products"
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                caret="false"
                className={`menu ${activeclass==='products'?"activeclass": ''} `}
              >
                <NavDropdown.Item>
                  <Link to="/women" onClick={()=>setActiveClass('products')}>Women</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/men"  onClick={()=>setActiveClass('products')}>Men</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/kid"  onClick={()=>setActiveClass('products')}>Kids</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/other"  onClick={()=>setActiveClass('products')}>All Products</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/magazin" onClick={()=>setActiveClass('magazin')}  className={`menu-list ${activeclass==='magazin'?"activeclass": ''} `}>
                Magazin
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={()=>setActiveClass('about')} className={`menu-list ${activeclass==='about'?"activeclass": ''} `}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNavbar;
