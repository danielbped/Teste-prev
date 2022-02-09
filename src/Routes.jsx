import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Login from './pages/Login'

const Routes = () => (
  <Switch>
    <Route exact path="/" element={ <Login /> } />
  </Switch>
);

export default Routes