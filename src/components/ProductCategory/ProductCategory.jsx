import React from 'react'
import all_product from '../assets/all_product'
import Item from '../Item/Item';
import BreadCrumb from '../Breadcrumb/Breadcrumb';
import '../ProductCategory/productCategory.css'
import NavDown from '../navbar/NavDown';

const ProductCategory = (props) => {
    const products= all_product;
  return (
    <div>
      <img src={props.banner} alt="" />
      <div className="container justify-content-center p-5">
     <div className='row'>
     {products.map((i)=>{
        if(i.category===props.category){
            return(<>
                    <Item key={i.id} product={products} id={i.id} name={i.name} image={i.image} old_price={i.old_price} price={i.price} />

            </>)
        }
      })}
     </div>
      </div>
      <NavDown/>
    </div>
  )
}

export default ProductCategory
