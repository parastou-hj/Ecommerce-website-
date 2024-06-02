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
  faBasketShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

function HeaderNavbar({ search, setSearch }) {
  const HeaderContext = useContext(Context);
  const cartNumber = HeaderContext.cartItemsNumber;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const[activeclass, setActiveClass]=useState("home");

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchInput.trim()) {
    setSearch(searchInput);
      navigate(`/search`);
    }
  };
  useEffect(()=>{
    if(location.pathname!== '/search'){
      setSearch('');
      setSearchInput('')
    }
  },[location,setSearch])

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
            <Link to="/login">
              <FontAwesomeIcon icon={faRightToBracket} size="lg" />
              <span className="">Login | Signup</span>
            </Link>
          </div>
          <div className="cart ms-3">
            {cartNumber <= 0 ? (
              <></>
            ) : (
              <div className="cart-number text-center">
                <span className="p-1">{cartNumber}</span>
              </div>
            )}
            <div>
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  className="ms-2"
                  size="xl"
                />
              </Link>
            </div>
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
                  <Link to="/women" onClick={()=>setActiveClass('products')}>women</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/men"  onClick={()=>setActiveClass('products')}>men</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/kid"  onClick={()=>setActiveClass('products')}>kids</Link>
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
