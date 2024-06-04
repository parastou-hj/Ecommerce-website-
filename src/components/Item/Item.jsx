import React, { useEffect, useState } from 'react'
import '../Item/CardItem.css'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

 const Item = (props) => {
  const[loading,setLoading]=useState(true);
  useEffect(() => {
    setTimeout(() => {

      setLoading(false);
    }, 1000);
  }, []);
  return (
  <>
    {loading? <div className='col-lg-3 col-md-4 col-sm-6 p-2'>
    <div className='skeleton-item text-center'>
    <Skeleton  style={{ height:'70%'}}/>
      <Skeleton count={1} style={{width:'150px', height:'10px', margin:"20px"}} />
      <Skeleton count={1} style={{width:'50px', height:'10px', margin:"20px"}} />
    </div>
      </div> :
    <div className='col-lg-3 col-md-4 col-sm-6 card-item p-2'>
      <Link to={`/product/${props.id}`}><div className='item'>
      <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      <p className='p-1 ms-1'>{props.name}</p>
      <div className="item-prices d-flex flex-column ms-1 text-center "> 
             <div className="item-price-old ">{props.old_price}</div>
             <div className="item-price-new text-danger">${props.price}</div>
       
      </div>
    </div></Link>
 
    </div>
  }
  </>
     )
}

export default Item