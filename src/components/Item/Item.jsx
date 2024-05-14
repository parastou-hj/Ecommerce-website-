import React from 'react'
import CardItem from '../Item/CardItem.css'
import { Link } from 'react-router-dom'

 const Item = (props) => {
  return (
    <div className='col-lg-3 col-md-4 bg-white cards pt-2 mt-4  '>
      <div className=' item justify-content-center'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-prices d-flex justify-content-around p-2"> 
             <div className="item-price-old ">${props.old_price}</div>
             <div className="item-price-new">${props.price}</div>
       
      </div>
      <button>Add to Cart</button>
    </div>
 
    </div> )
}

export default Item