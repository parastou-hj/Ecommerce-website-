import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import remove_icon from '../assets/remove_icon.png'
import '../Cart/cartList.css'
import recycle_bin from '../assets/recycle_bin.png'

const CartList = ({addedItem}) => {
  const cartContext= useContext(CartContext);
    
    const item= addedItem;
  return (
  <>
   <div className='cart-item d-flex flex-column m-2 ' >
         <div className="img-name d-flex ">
             <img className='p-image' src={item.image} />
             <span className='p-2 mt-5'>{item.name}</span> 
         </div>
         <div className='num-price'>
             <div className='num '>
                {item.quantity===1?<img onClick={decFromCart} src={recycle_bin} style={{height:"40px"}} className='p-2'/>
                : <button onClick={decFromCart} className=''>-</button>}
                 <span className='text-center p-1'>{item.quantity}</span>
                 <button onClick={addToCart} className=''>+</button>
             </div>
             <span className='price '>${item.price}</span>
         </div>
   </div>
   
  </>
  
   
  )
  function addToCart(){
    cartContext.inCart(item)
   }
   function decFromCart(){
    cartContext.decCart(item)
   }
}

export default CartList;
