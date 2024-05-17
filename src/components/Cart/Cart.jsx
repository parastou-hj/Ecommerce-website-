import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Item from '../Item/Item';
import CartList from './CartList';

const Cart = () => {
    const cartContext=useContext(CartContext);
    const cartItems=cartContext.cartItems;
    console.log(cartItems);
  return (
    <div className="container">
      <div className="row">
      {cartItems.map(item=>{return(<>
          <CartList addedItem={item} />
        
        </>)}
        )}
      </div>
    </div>
  )
}

export default Cart
