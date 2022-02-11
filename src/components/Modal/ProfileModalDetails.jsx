import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  Button,
  Img,
  P,
  Span,
  LogoutButton,
} from '../../Style/ProfileModal';
import DataContext from '../../context/DataContext';

const ProfileModalDetails = ({ user }) => {
  const { setShowProfileModal } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/dashboard');
    setShowProfileModal(false);
    localStorage.removeItem('token');
  }

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
      <Img src={ urlImagemPerfil } alt="Foto de perfil" />
      <P>
        <Span>Nome: </Span>
        { nome }
      </P>
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
        onClick={() => setShowProfileModal(false)}
      >
        Fechar
      </Button>
      <LogoutButton
        type="button"
        onClick={ handleLogout }
      >
        Sair
      </LogoutButton>
    </Modal>
  )
}

ProfileModalDetails.propTypes = {
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

export default ProfileModalDetails;
