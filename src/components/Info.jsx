import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import InfoCard from './InfoCard';

const Info = ({ user }) => {
  const authorization = localStorage.getItem('token');
  const [modulos, setModulos] = useState([]);

  useEffect(() => {
    if (modulos.length === 0) {
      Promise.all(user.modulos.map((modulo) => axios({
        url: `http://localhost:8080/counter?tipo=${modulo}`,
        method: 'GET',
        headers: { authorization },
      }).then(({ data }) => data[0]))).then(setModulos)
    }
  }, [modulos, authorization, user.modulos])

  return (
    <div>
      { modulos.map((modulo) => <InfoCard modulo={ modulo } />) }
    </div>
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
