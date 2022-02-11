import React, { useState } from 'react';
import DataContext from './DataContext'
import PropTypes from 'prop-types';

const UserProvider = ({ children }) => {
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showPetitionModal, setShowPetitionModal] = useState(false)

  const context = {
    showPetitionModal, 
    setShowPetitionModal,
    showProfileModal,
    setShowProfileModal
  }

  return (
    <DataContext.Provider value={ context }>
      { children }
    </DataContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
