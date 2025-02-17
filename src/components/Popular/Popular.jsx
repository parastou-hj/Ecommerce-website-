import React from 'react'
import data from '../assets/data'
import Item from '../Item/Item';
import '../Popular/popular.css'
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../features/productSlice';


const Popular = () => {
  const product= data;
  return (
    <div className='popular d-flex flex-column align-items-center pt-5'>
      <h1>most popular</h1>
      <hr style={{width:"150px", height:"2px"}}/>
      <div className="container justify-content-center">
      <div className="row">
      {product.map((i)=>{
        return(<>
        <Item key={i.id} id={i.id} name={i.name} image={i.image} price={i.price} />
        </>)

      })}
      </div>
      </div>
      

    </div>
  )
}

export default Popular
