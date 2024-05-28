import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Item from '../Item/Item';
import CartList from './CartList';
import '../Cart/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBasketShopping, faRecycle } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const cartContext=useContext(CartContext);
    const cartItems=cartContext.cartItems;
    const cartItemsNumber=cartContext.cartItemsNumber;
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
  <div className="container">
    {cartItemsNumber===0?<div className='empty m-2 col-lg-12'>
          <FontAwesomeIcon icon={faBasketShopping} size='2xl'  />
         <span> your basket is empty!</span>
        </div>:
    <div className="row">
    <div className="col-lg-8">
      <div className="container">
      <div className="row">
        {cartItems.map(item=>{return(<>
          <CartList addedItem={item} key={item.id}/>
        
        </>)}
        )} 
       
      </div>
      
    </div>
    </div>
    <div className="col-lg-3 col-md-12 ">
      {cartItemsNumber>0? <div className="cart-prices m-2">
        <div className="d-flex justify-content-between">
        <span>Total Price({cartItemsNumber})</span>
        <span>${totalPrice}</span>
        </div>
       </div>:<></>}
    </div>
    </div>
}
  </div>
  )
}

export default Cart
