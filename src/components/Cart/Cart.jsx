import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Item from '../Item/Item';
import CartList from './CartList';
import '../Cart/cart.css'

const Cart = () => {
    const cartContext=useContext(CartContext);
    const cartItems=cartContext.cartItems;
    const cartItemsNumber=cartContext.cartItemsNumber;
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
  <div className="container">
    <div className="row">
    <div className="col-lg-8">
      <div className="container">
      <div className="row">
        {cartItemsNumber===0?<div className='empty col-lg-8 col-md-12" m-2'>
         <span> your cart is empty!</span>
        </div>:<>{cartItems.map(item=>{return(<>
          <CartList addedItem={item} key={item.id}/>
        
        </>)}
        )}</> }
       
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
  </div>
  )
}

export default Cart
