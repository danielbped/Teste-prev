import React from 'react';
import ReactPaginate from 'react-paginate';
import { StyledPaginate } from '../../Style/Dashboard';
import PropTypes from 'prop-types';

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
  );
};

Paginate.propTypes = {
  totalPages: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  handlePageClick: PropTypes.func.isRequired,
};

export default Paginate;