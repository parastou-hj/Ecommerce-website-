import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import '../Pagination/Pagination.css';
import { 
  setCurrentPage, 
  selectCurrentPage, 
  selectTotalPages 
} from '../../features/paginationSlice';

const Paginate = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const pageNumbers = [];
  for (let number = 1; number <= totalPages; number++) {
    pageNumbers.push(number);
  }

  // if (totalPages <= 1) return null;

  return (
    <div className='paginate'>
      <Pagination className='pagination'>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
        {pageNumbers.map(number => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </div>
  );
};

export default Paginate;