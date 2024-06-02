import React, { useContext, useState } from 'react';
import all_product from '../assets/all_product';
import Item from '../Item/Item';
import BreadCrumb from '../Breadcrumb/Breadcrumb';
import '../ProductCategory/productCategory.css';
import NavDown from '../navbar/NavDown';
import Footer from '../Footer/Footer';
import Paginate from '../Pagination/Pagination';
import { Context } from '../../Context/Context';

const ProductCategory = (props) => {
  const productCategoryContext=useContext(Context);
 const {indexOfFirstProduct,indexOfLastProduct,itemsInPage,currentPage,handlePageChange}=productCategoryContext;
  const products = all_product.filter(product => product.category === props.category);
 const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <img src={props.banner} alt="" className="category-banner" />
      <div className="container justify-content-center p-5">
        <div className="row">
          {currentProducts.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <Paginate
        itemsPerPage={itemsInPage}
        totalItems={products.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Footer />
      <NavDown />
    </div>
  );
};

export default ProductCategory;
