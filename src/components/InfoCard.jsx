import React from 'react';
import PropTypes from 'prop-types';

const InfoCard = ({ modulo }) => {
  const { tipo, total, totalPeriodo: { mensal } } = modulo;
  return (
    <div>
      <h2>{ tipo }</h2>
      <p>{ total }</p>
      <p>Este mês: { mensal }</p>
    </div>
  )
}

InfoCard.propTypes = {
  modulo: PropTypes.shape({
    tipo: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    totalPeriodo: PropTypes.shape({
      mensal: PropTypes.number,
    }).isRequired,
  })
}

export default InfoCard;
