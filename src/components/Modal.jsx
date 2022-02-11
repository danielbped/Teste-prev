import React from 'react';
import ReactModal from 'react-modal';
import ProfileModal from './ProfileModal'

const style = {
  content: {
    margin: 'auto',
    width: '40%',
    height: '60%'
  } 
}

const Modal = ({ showModal, user }) => {
  return (
    <ReactModal
      isOpen={ showModal }
      contentLabel="Profile Modal"
      style={ style }
    >
      <ProfileModal user={ user }/>
    </ReactModal>
  )
}

export default Modal;
