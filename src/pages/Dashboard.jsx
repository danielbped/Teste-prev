import React, { useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode'
import Header from '../components/Header'
import Petitions from '../components/Petitions'
import Info from '../components/Info'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { DashboardTitle } from '../Style/Dashboard';
import DataContext from '../context/DataContext';
import Modal from '../components/Modal';
import Paginate from '../components/Paginate';

const Dashboard = () => {
  const authorization = localStorage.getItem('token');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0)
  const { showModal } = useContext(DataContext);

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
      <Modal
        showModal = { showModal}
        user={ conta }
      />
      <DashboardTitle>Últimas petições</DashboardTitle>
      <Petitions page={ page }/>
      <Paginate
        handlePageClick={ handlePageClick }
        totalPages = { totalPages }
      />
    </main>
  )
}

export default Dashboard;
