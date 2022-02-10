import React from 'react';
import jwt_decode from 'jwt-decode'
import Header from '../components/Header'
import Petitions from '../components/Petitions'
import Info from '../components/Info'
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/" />;

  const { conta } = jwt_decode(token);

  return (
    <main>
      <Header user={ conta } />
      <Info user={ conta } />
      <Petitions user={ conta } />
    </main>
  )
}

export default Dashboard;
