import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import InfoCard from './InfoCard';
import { StyledInfo } from '../../Style/Info';

const Info = ({ user }) => {
  const authorization = localStorage.getItem('token');
  const [modules, setModules] = useState([]);

  useEffect(() => {
    if (modules.length === 0) {
      Promise.all(user.modulos.map((module) => axios({
        url: `http://localhost:8080/counter?tipo=${module}`,
        method: 'GET',
        headers: { authorization },
      }).then(({ data }) => data[0]))).then(setModules)
    }
  }, [modules, authorization, user.modulos])

  return (
    <StyledInfo>
      { modules.map((module) => <InfoCard module={ module } key={ module.tipo } />) }
    </StyledInfo>
  )
}

Info.propTypes = {
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

export default Info;
