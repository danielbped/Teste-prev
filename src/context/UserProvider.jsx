import React, { useState } from 'react';
import DataContext from './DataContext'
import PropTypes from 'prop-types';

const UserProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <DataContext.Provider value={ { showModal, setShowModal } }>
      { children }
    </DataContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
