import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { fetchProducts, selectAllProducts, selectProductStatus, selectProductError } from '../../features/productSlice';

const FetchedProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);
  const error = useSelector(selectProductError);
  console.log(products)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div className="row">
        {[...Array(8)].map((_, index) => (
          <div key={index} className='col-lg-3 col-md-4 col-sm-6 p-2'>
            <div className='skeleton-item text-center'>
              <Skeleton style={{ height: '200px' }}/>
              <Skeleton count={1} style={{width: '150px', height: '20px', margin: "10px auto"}} />
              <Skeleton count={1} style={{width: '50px', height: '20px', margin: "10px auto"}} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (status === 'failed') {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className='col-lg-3 col-md-4 col-sm-6 card-item p-2'>
          <Link to={`/product/${product.id}`}>
            <div className='item'>
              <img src={product.image} alt={product.title} onClick={() => window.scrollTo(0, 0)} />
              <p className='p-1 ms-1'>{product.title}</p>
              <div className="item-prices d-flex flex-column ms-1 text-center "> 
                <div className="item-price-new text-danger">${product.price.toFixed(2)}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FetchedProducts;