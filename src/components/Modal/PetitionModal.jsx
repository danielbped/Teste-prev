import React from 'react';
import ReactModal from 'react-modal';
import PetitionModalDetails from './PetitionModalDetails'
import PropTypes from 'prop-types';

const style = {
  content: {
    margin: 'auto',
    width: '40%',
    height: '60%'
  },
};

const PetitionModal = ({ showModal, petition }) => {
  return (
    <ReactModal
      isOpen={ showModal }
      contentLabel="Petition Modal"
      style={ style }
      ariaHideApp={ false }
    >
      <PetitionModalDetails petition={ petition }/>
    </ReactModal>
  );
};

PetitionModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  petition: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    tipoDeProcesso: PropTypes.string.isRequired,
    tipoDeAcao: PropTypes.string.isRequired,
    tiposDeBeneficio: PropTypes.arrayOf(PropTypes.string).isRequired,
    subtipo: PropTypes.arrayOf(PropTypes.string).isRequired,
    competencia: PropTypes.string,
    carenciaMinima: PropTypes.number,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    criadoPor: PropTypes.string,
    atualizadoPor: PropTypes.string.isRequired,
    curtidas: PropTypes.number.isRequired,
    criticas: PropTypes.number.isRequired,
    idadeMinima: PropTypes.number,
    ativa: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired,
    profissoes: PropTypes.arrayOf(PropTypes.object).isRequired,
    incapacidades: PropTypes.arrayOf(PropTypes.string).isRequired,
    dataDeCriacao: PropTypes.string.isRequired,
    dataDaUltimaAtualizacao: PropTypes.string.isRequired,
    periodo: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default PetitionModal;
