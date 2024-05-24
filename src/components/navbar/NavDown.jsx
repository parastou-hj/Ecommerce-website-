import React from 'react'
import '../navbar/navDown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
const NavDown = () => {
  return (
    <div className='nav-down bg-white container-fluid p-3'>
        <div className="row text-center ">
            <div className="col">
                <FontAwesomeIcon icon={faHome}/>
                <span>Home</span>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faBars}/>
                <span>Category</span>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faShoppingBasket}/>
                <span>Basket</span>
            </div>
        </div>
    </div>
  )
}

export default NavDown
