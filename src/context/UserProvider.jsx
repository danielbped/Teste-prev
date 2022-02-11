import React from 'react';
import DataContext from './DataContext'
import PropTypes from 'prop-types';

const UserProvider = ({ children }) => {
  const contextValue = {
    showModal: false,
  };

  return (
    <DataContext.Provder value={ contextValue }>
      { children }
    </DataContext.Provder>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
