import React, { useContext, useState } from "react";
import "../navbar/navDown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faShoppingBag,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/userSlice";
const NavDown = () => {
  const NavContext = useContext(Context);
  const cartNumber = useSelector(state=>state.cart.totalQuantity);
  const user=useSelector(selectCurrentUser)


  return (
    <div className="nav-down bg-white container-fluid">
      <div className="row text-center ">
        <Link to="/" className="col nav-down-item">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </Link>
        <Link to="/categories" className="col  nav-down-item">
          <FontAwesomeIcon icon={faBars} />
          <span>Category</span>
        </Link>
        <Link
          to="/cart"
          className="col nav-down-item d-flex justify-content-center"
        >
          <div className="basket">
            {cartNumber <= 0 ? (
              <></>
            ) : (
              <span className="basket-number">{cartNumber}</span>
            )}
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className="icon ms-2"
              size="xl"
            />
          </div>
          <span>Basket</span>
        </Link>
        <Link to={user.username!==''?'/user':'/login'} className="col  nav-down-item">
          <FontAwesomeIcon icon={faUser} />
          {user.username!==''?user.username :<span className="">Account</span>}

        </Link>
      </div>
    </div>
  );
};

export default NavDown;
