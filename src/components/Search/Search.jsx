import React, { useContext } from 'react'
import all_product from '../assets/all_product'
import Item from '../Item/Item';
import '../Search/Search.css'
import Footer from '../Footer/Footer';
import NavDown from '../navbar/NavDown';
import Paginate from '../Pagination/Pagination';
import { Context } from '../../Context/Context';

const Search = ({search,setSearch}) => {
  const searchContext=useContext(Context);
    const products=all_product;
    const {indexOfFirstProduct,indexOfLastProduct,itemsInPage,currentPage,handlePageChange}=searchContext;
    const trimmedSearch = search.trim().toLocaleLowerCase();
    const filter = products.filter((product) => {
      return trimmedSearch !== "" && product.name.toLocaleLowerCase().includes(trimmedSearch);
    });
    const currentProducts = filter.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>

    
    <div className='container p-5'>
        <div className="row">
            {filter.length>0?currentProducts.map((product)=>{
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
    filter.length>0?  <Paginate
    itemsPerPage={itemsInPage}
    totalItems={filter.length}
    currentPage={currentPage}
    onPageChange={handlePageChange}
  />:<></>
   }
    <Footer/>
    <NavDown/>
    </div>
  )
}

export default Search
