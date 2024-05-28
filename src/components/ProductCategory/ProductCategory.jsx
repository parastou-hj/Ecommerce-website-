import React, { useState } from 'react';
import all_product from '../assets/all_product';
import Item from '../Item/Item';
import BreadCrumb from '../Breadcrumb/Breadcrumb';
import '../ProductCategory/productCategory.css';
import NavDown from '../navbar/NavDown';
import Footer from '../Footer/Footer';
import Paginate from '../Pagination/Pagination';

const ProductCategory = (props) => {
  const itemsPerPage = 20;
  const products = all_product.filter(product => product.category === props.category);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
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
        itemsPerPage={itemsPerPage}
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
