import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCard,
  StyledCardTitle,
  StyledCardMensal,
  StyledCardTotal,
} from '../Style/Info';

const InfoCard = ({ module }) => {
  const { tipo, total, totalPeriodo: { mensal } } = module;
  return (
    <StyledCard>
      <StyledCardTitle>
        { tipo.charAt(0) + tipo.slice(1).toLowerCase() }
      </StyledCardTitle>
      <StyledCardTotal tipo={ tipo }>
        { total }
      </StyledCardTotal>
      <StyledCardMensal>
        Este mês: { mensal }
      </StyledCardMensal>
    </StyledCard>
  )
}

InfoCard.propTypes = {
  module: PropTypes.shape({
    tipo: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    totalPeriodo: PropTypes.shape({
      mensal: PropTypes.number,
    }).isRequired,
  })
}

export default InfoCard;
