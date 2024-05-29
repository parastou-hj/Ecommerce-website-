import React from 'react'
import { Link } from 'react-router-dom'
import '../SliderItem/sliderItem.css'

const SliderItem = (props) => {
  const{id, old_price, price, image}= props;
  const discountAmount = old_price-price;
  const discount=(discountAmount/old_price)*100;
  const discountPercentage=Math.round(discount)
  return (
    <div className='bg-white slider-item-card m-1'>
    <div className='slider-item'>
    <Link to={`/product/${id}`}><img className='' src={image} alt="" /></Link>
    <div className="off-price d-flex justify-content-around p-1 mt-2">
        <div className="item-prices d-flex flex-column ">
           <div className="item-price-old ">{old_price}</div>
           <div className="item-price-new fw-medium">${price}</div>
       </div>
       <div className="off p-1"><span className='bg-danger p-1 text-white fs-6'>%{discountPercentage}</span></div>
    </div>
  </div>

  </div>
  )
}

export default SliderItem
