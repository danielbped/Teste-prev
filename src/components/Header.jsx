import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Img, StyledHeader, Button } from '../Style/Header'
import Logo from '../Style/Logo';
import LogoSvg from '../svg/Logo.svg';
import DataContext from '../context/DataContext';

const Header = ({ user }) => {
  const { nome, urlImagemPerfil } = user;
  const { setShowModal } = useContext(DataContext);
  return (
    <StyledHeader>
      <Logo src={ LogoSvg }/>
      <Button type="button" onClick={ () => setShowModal(true) }>
        <Img src={ urlImagemPerfil } alt={ `Foto de ${nome}` } />
      </Button>
    </StyledHeader>
  )
}

Header.propTypes = {
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

export default Header;
