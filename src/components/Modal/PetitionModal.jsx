import React from 'react';
import ReactModal from 'react-modal';
import PetitionModalDetails from './PetitionModalDetails'

const style = {
  content: {
    margin: 'auto',
    width: '40%',
    height: '60%'
  } 
}

const PetitionModal = ({ showModal, petition }) => {
  return (
    <ReactModal
      isOpen={ showModal }
      contentLabel="Petition Modal"
      style={ style }
    >
      <PetitionModalDetails petition={ petition }/>
    </ReactModal>
  )
}

export default PetitionModal;
