import React, { useState } from 'react';
import DataContext from './DataContext'
import PropTypes from 'prop-types';

const UserProvider = ({ children }) => {
  const [showProfileModal, setShowProfileModal] = useState(false)

  return (
    <DataContext.Provider value={ { showProfileModal, setShowProfileModal } }>
      { children }
    </DataContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
