import React from 'react';
import PropTypes from 'prop-types';
import { Img, StyledHeader } from '../Style/Header'

const Header = ({ user }) => {
  const { email, nome, urlImagemPerfil } = user;
  return (
    <StyledHeader>
      <Img src={ urlImagemPerfil } alt={ `Foto de ${nome}` } />
      <div>
        <p>{ nome }</p>
        <p>{ email }</p>
      </div>
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
