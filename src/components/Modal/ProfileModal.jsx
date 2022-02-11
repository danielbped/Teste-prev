import React from 'react';
import ReactModal from 'react-modal';
import ProfileModalDetails from './ProfileModalDetails'

const style = {
  content: {
    margin: 'auto',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  } 
}

const ProfileModal = ({ showModal, user }) => {
  return (
    <ReactModal
      isOpen={ showModal }
      contentLabel="Profile Modal"
      style={ style }
    >
      <ProfileModalDetails user={ user }/>
    </ReactModal>
  )
}

export default ProfileModal;
