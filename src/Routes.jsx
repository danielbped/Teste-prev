import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const Routes = () => (
  <Switch>
    <Route exact path="/" element={ <Login /> } />
    <Route exact path="/dashboard" element={ <Dashboard /> } />
  </Switch>
);

export default Routes