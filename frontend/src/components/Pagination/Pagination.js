import React from 'react';
import './pagination.css';

const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
  const pageNumbers = [];
  // console.log(currentPage);

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={ (currentPage === number) ? 'page-item current' : 'page-item'}>
            <span onClick={() => paginate(number)} className='page-link'>{number}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;