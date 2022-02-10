import React from 'react';
import PropTypes from 'prop-types';

const PetitionCard = (
  { petition: {
    titulo,
    resumo,
    dataDeCriacao,
    subtipo
  }
}) => {
  const date = dataDeCriacao.split('T')[0].split('-').reverse().join('/');
  const hour = dataDeCriacao.split('T')[1].split('.')[0];

  return (
    <div>
      <div>
        { titulo.split('.').map((title) => <p>{ title }</p>) }
      </div>
      <p>{ subtipo[0] }</p>
      <p>{ resumo }</p>
      <div>
        <p>Publicação: { date } - { hour }</p>
        <p>Pré-visualizar petição</p>
      </div>
    </div>
  )
}

PetitionCard.propTypes = {
  petition: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default PetitionCard;
