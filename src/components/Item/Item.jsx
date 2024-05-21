import React from 'react'
import '../Item/CardItem.css'
import { Link } from 'react-router-dom'

 const Item = (props) => {
  return (
    <div className='col '>
      <div className=' item '>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p className='p-1 ms-1'>{props.name}</p>
      <div className="item-prices d-flex flex-column justify-content-around p-1 ms-1 "> 
             <div className="item-price-old ">{props.old_price}</div>
             <div className="item-price-new text-danger">${props.price}</div>
       
      </div>
    </div>
 
    </div> )
}

export default Item