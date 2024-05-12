import React from 'react'
import all_product from '../assets/all_product'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

const Product = () => {
    const products = all_product;
    const id= useParams();
    const productItem=products.find((i)=> i.id===Number(id.productId));
  return (
    <div>
     <ProductDisplay product={productItem} />
    </div>
  )
}

export default Product
