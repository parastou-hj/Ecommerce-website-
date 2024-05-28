import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../Pagination/Pagination.css';

const Paginate = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const pageNumbers = [];
  for (let number = 1; number <= Math.ceil(totalItems / itemsPerPage); number++) {
    pageNumbers.push(number);
  }

  return (
    <div className='paginate'>
      <Pagination className='pagination'>
        <Pagination.First onClick={() => onPageChange(1)} />
        <Pagination.Prev onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)} />
        {pageNumbers.map(number => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => onPageChange(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => onPageChange(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)} />
        <Pagination.Last onClick={() => onPageChange(pageNumbers.length)} />
      </Pagination>
    </div>
  );
};

export default Paginate;
