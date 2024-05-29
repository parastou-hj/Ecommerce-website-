import React, { useContext,useState } from 'react'
import '../navbar/navDown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
const NavDown = () => {
    const cartContext=useContext(CartContext);
    const cartNumber= cartContext.cartItemsNumber;
   
  return (
    <div className='nav-down bg-white container-fluid'>
        <div className="row text-center ">
        <Link to='/'  className="col nav-down-item">  
              <FontAwesomeIcon icon={faHome}/>
                <span>Home</span> 
             </Link>
           <Link to='/categories' className="col  nav-down-item" >
                <FontAwesomeIcon icon={faBars}/>
                <span>Category</span>
            
            </Link>
            <Link to='/cart' className="col nav-down-item d-flex justify-content-center">
              
               <div className='basket d-inline'>
              {cartNumber<=0?<></>: <span className='basket-number' >{cartNumber}</span>}
               <FontAwesomeIcon icon={faShoppingBasket} className='icon ms-2' size='xl'/>
                </div>
                <span>Basket</span>
              </Link>
        </div>

    </div>
  )
}

export default NavDown
