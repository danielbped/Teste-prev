import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  Img,
  P,
  Title,
  Span,
} from '../Style/Modal'
import DataContext from '../context/DataContext';

const ProfileModal = ({ user }) => {
  const { setShowModal } = useContext(DataContext);

  const {
    nome,
    email,
    urlImagemPerfil,
    uuid,
    privilegio,
    modulos,
  } = user;

  return (
    <Modal>
      <Title>Perfil de { nome }</Title>
      <Img src={ urlImagemPerfil } alt="Foto de perfil" />
      <P>
        <Span>ID do usuário: </Span>
        { uuid }
      </P>
      <P>
        <Span>Status: </Span>
        { privilegio }
      </P>
      <P>
        <Span>Interesses: </Span>
        { modulos.reduce((acc, curr) => `${acc}, ${curr}`) }</P>
      <P>
        <Span>E-mail: </Span>
        { email }
      </P>
      <Button
        type="button"
        onClick={() => setShowModal(false)}
      >
        Fechar
      </Button>
    </Modal>
  )
}

ProfileModal.propTypes = {
  user: PropTypes.shape({
    ativo: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    modulos: PropTypes.arrayOf(PropTypes.string).isRequired,
    nome: PropTypes.string.isRequired,
    privilegio: PropTypes.string.isRequired,
    urlImagemPerfil: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
  })
}

export default ProfileModal;
