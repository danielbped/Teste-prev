import React from 'react';
import jwt_decode from 'jwt-decode'
import Header from '../components/Header'
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/" />;

  const { conta } = jwt_decode(token);

  return (
    <Header user={ conta } />
  )
}

export default Dashboard;
