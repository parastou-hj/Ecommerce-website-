import React, { useEffect, useState } from 'react'
import all_product from '../assets/all_product'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../features/productSlice';

const Product = () => {
  const products=useSelector(selectAllProducts)
    const id= useParams();
    const productItem=products.find((i)=> i.id===Number(id.productId));
  return (
    <div>
     <ProductDisplay product={productItem} />
    </div>
  )
}

export default Product
