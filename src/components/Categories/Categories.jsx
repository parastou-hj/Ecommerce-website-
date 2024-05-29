import React from 'react'
import NavDown from '../navbar/NavDown'
import Footer from '../Footer/Footer'
import product_categories from '../assets/categories';
import '../Categories/Categories.css'
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories=product_categories;
  return (
    <div className='text-center'>
       <div className="d-flex p-category " >
       {categories.map(i=> 
        <div className='category-item mx-4 my-4'>
            <Link to={`/${i.category}`}>
            <img src={i.image} alt="" />
            <p >{i.category}</p>
            </Link>
        </div>
            
        )}
       </div>
       <NavDown/>
    </div>
   
  )
}

export default Categories
