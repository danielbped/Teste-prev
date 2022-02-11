import React from 'react';
import ReactPaginate from 'react-paginate';
import { StyledPaginate } from '../../Style/Dashboard';

const Paginate = ({ totalPages, handlePageClick }) => {
  return (
    <StyledPaginate>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(totalPages)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="pageClassName"
          activeLinkClassName="activeLinkClassName"
          previousClassName="previousClassName"
          nextClassName="nextClassName"
          breakClassName="breakClassName"
        />
      </StyledPaginate>
  )
}

export default Paginate;