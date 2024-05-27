import React, { useContext,useState } from 'react'
import '../navbar/navDown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import OffCanvas from '../OffCanvas/OffCanvas'
const NavDown = () => {
    const cartContext=useContext(CartContext);
    const cartNumber= cartContext.cartItemsNumber;
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
   
  return (
    <div className='nav-down bg-white container-fluid'>
        <div className="row text-center ">
            <div className="col nav-down-item">
              <Link to='/'>
              <FontAwesomeIcon icon={faHome}/>
                <span>Home</span>
                </Link>
            </div>
            <div className="col  nav-down-item" onClick={handleShow} >
                <FontAwesomeIcon icon={faBars}/>
                <span>Category</span>
            </div>
            <div className="col nav-down-item d-flex justify-content-center">
               <Link to='/cart'>
               <div className='basket d-inline'>
              {cartNumber<=0?<></>: <span className='basket-number' >{cartNumber}</span>}
               <FontAwesomeIcon icon={faShoppingBasket} className='icon ms-2' size='xl'/>
                </div>
                <span>Basket</span>
               </Link>
              
            </div>
        </div>
        <OffCanvas placement={'bottom'} show={show} setShow={setShow} />

    </div>
  )
}

export default NavDown
