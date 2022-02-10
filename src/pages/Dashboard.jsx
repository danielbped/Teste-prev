import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import Header from '../components/Header'
import Petitions from '../components/Petitions'
import Info from '../components/Info'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import {
  DashboardTitle,
  StyledPaginate,
} from '../Style/Dashboard'

const Dashboard = () => {
  const authorization = localStorage.getItem('token');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0)

  const handlePageClick = ({ selected }) => setPage(selected + 1);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/peticoes?_page=${page}&_limit=2`,
      method: 'GET',
      headers: { authorization },
    }).then(({ headers }) => setTotalPages(headers["x-total-count"]))
  }, [authorization, page, totalPages])

  if (!authorization) return <Navigate to="/" />;

  const { conta } = jwt_decode(authorization);

  return (
    <main>
      <Header user={ conta } />
      <Info user={ conta } />
      <DashboardTitle>Últimas petições</DashboardTitle>
      <Petitions page={ page }/>
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
    </main>
  )
}

export default Dashboard;
