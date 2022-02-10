import React from 'react';
import PropTypes from 'prop-types';
import { Img, StyledHeader } from '../Style/Header'
import Logo from '../Style/Logo';
import LogoSvg from '../svg/Logo.svg';

const Header = ({ user }) => {
  const { nome, urlImagemPerfil } = user;
  return (
    <StyledHeader>
      <Logo src={ LogoSvg }/>
      <Img src={ urlImagemPerfil } alt={ `Foto de ${nome}` } />
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
