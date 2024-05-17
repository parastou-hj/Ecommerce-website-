import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import remove_icon from '../assets/remove_icon.png'
import '../Cart/cartList.css'

const CartList = ({addedItem}) => {
  const cartContext= useContext(CartContext);
    
    const item= addedItem;
  return (
   <div className='cart-item col-lg-8 col-md-12" d-flex flex-column m-2 ' >
         <div className="img-name d-flex ">
             <img className='p-image' src={item.image} />
             <span className='p-2 mt-5'>{item.name}</span> 
         </div>
         <div className='num-price'>
             <div className='num '>
                 <button onClick={decFromCart} className=''>-</button>
                 <span className='text-center p-1'>{item.quantity}</span>
                 <button onClick={addToCart} className=''>+</button>
             </div>
             <span className='price '>{item.price}</span>
         </div>
   </div>
  
   
  )
  function addToCart(){
    cartContext.inCart(item)
   }
   function decFromCart(){
    cartContext.decCart(item)
   }
}

export default CartList;
