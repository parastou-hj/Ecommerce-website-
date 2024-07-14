import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import all_product from '../assets/all_product';
import Item from '../Item/Item';
import BreadCrumb from '../Breadcrumb/Breadcrumb';
import '../ProductCategory/productCategory.css';
import NavDown from '../navbar/NavDown';
import Footer from '../Footer/Footer';
import Paginate from '../Pagination/Pagination';
import { 
  setCurrentPage, 
  setTotalItems,
  selectItemsPerPage, 
  selectCurrentPage, 
  selectIndexOfFirstProduct, 
  selectIndexOfLastProduct 
} from '../../features/paginationSlice';

const ProductCategory = ({ category, banner }) => {
  const dispatch = useDispatch();
  const itemsPerPage = useSelector(selectItemsPerPage);
  const currentPage = useSelector(selectCurrentPage);
  const indexOfFirstProduct = useSelector(selectIndexOfFirstProduct);
  const indexOfLastProduct = useSelector(selectIndexOfLastProduct);

  const products = all_product.filter(product => product.category === category);
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    dispatch(setTotalItems(products.length));
    dispatch(setCurrentPage(1));
  }, [dispatch, products.length, category]);

  return (
    <div>
      <img src={banner} alt="" className="category-banner" />
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
      {products.length > 0 && <Paginate />}
      <Footer />
      <NavDown />
    </div>
  );
};

export default ProductCategory;