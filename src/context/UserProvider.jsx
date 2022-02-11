import React from 'react';
import DataContext from './DataContext'
import PropTypes from 'prop-types';

const UserProvider = ({ children }) => {
  const contextValue = {
    showModal: false,
  };

  return (
    <DataContext.Provider value={ contextValue }>
      { children }
    </DataContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
