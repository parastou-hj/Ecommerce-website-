import React, { useContext, useEffect } from 'react'
import all_product from '../assets/all_product'
import Item from '../Item/Item';
import '../Search/Search.css'
import Footer from '../Footer/Footer';
import NavDown from '../navbar/NavDown';
import Paginate from '../Pagination/Pagination';
import { Context } from '../../Context/Context';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, selectIndexOfFirstProduct, selectIndexOfLastProduct, selectItemsPerPage, selectTotalItems, setCurrentPage, setTotalItems } from '../../features/paginationSlice';
import { selectSearch } from '../../features/searchSlice';

const Search = () => {
  const search=useSelector(selectSearch)
    const products=all_product;
    const dispatch = useDispatch();
    const indexOfFirstProduct=useSelector(selectIndexOfFirstProduct)
    const indexOfLastProduct=useSelector(selectIndexOfLastProduct)
    const trimmedSearch = search.trim().toLocaleLowerCase();
    const filteredProducts = products.filter((product) => {
      return trimmedSearch !== "" && product.name.toLocaleLowerCase().includes(trimmedSearch)|| product.category===trimmedSearch;
    });
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
      dispatch(setTotalItems(filteredProducts.length));
      dispatch(setCurrentPage(1)); 
    }, [dispatch, filteredProducts.length]);
  return (
    <div>

    
    <div className='container p-5'>
        <div className="row">
            {filteredProducts.length>0?currentProducts.map((product)=>{
                return(
                    <Item
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                )
            }):<div className='text-center not-found'><div>Product not found!</div></div>
            }

        </div>
      
 
    </div>
   {
    filteredProducts.length>0?  <Paginate />:<></>
   }
    <Footer/>
    <NavDown/>
    </div>
  )
}

export default Search
