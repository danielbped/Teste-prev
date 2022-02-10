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
        { titulo.split('.').map((title) => <p key={ title }>{ title }</p>) }
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
  petition: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    tipoDeProcesso: PropTypes.string.isRequired,
    tipoDeAcao: PropTypes.string.isRequired,
    tiposDeBeneficio: PropTypes.arrayOf(PropTypes.string).isRequired,
    subtipo: PropTypes.arrayOf(PropTypes.string).isRequired,
    competencia: PropTypes.string,
    carenciaMinima: PropTypes.number,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    criadoPor: PropTypes.string,
    atualizadoPor: PropTypes.string.isRequired,
    curtidas: PropTypes.number.isRequired,
    criticas: PropTypes.number.isRequired,
    idadeMinima: PropTypes.number,
    ativa: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired,
    profissoes: PropTypes.arrayOf(PropTypes.object).isRequired,
    incapacidades: PropTypes.arrayOf(PropTypes.string).isRequired,
    dataDeCriacao: PropTypes.string.isRequired,
    dataDaUltimaAtualizacao: PropTypes.string.isRequired,
    periodo: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};

export default PetitionCard;
