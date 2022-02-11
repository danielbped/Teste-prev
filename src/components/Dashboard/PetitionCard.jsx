import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPetitionCard,
  PetitionTitles,
  PetitionResume,
  PetitionSubtype,
  PetitionFooter,
  PetitionDate,
  PetitionLink,
  PetitionTitle
} from '../../Style/Dashboard'
import Eye from '../../svg/Eye.svg';

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
    <StyledPetitionCard>
      <PetitionTitles>
        { titulo.split('.').slice(-3).map(
            (title) => <PetitionTitle key={ title }>{ title }</PetitionTitle>
          )
        }
      </PetitionTitles>
      <PetitionSubtype>
        { subtipo[0].charAt(0) + subtipo[0].slice(1).toLowerCase() }
      </PetitionSubtype>
      <PetitionResume>{ resumo }</PetitionResume>
      <PetitionFooter>
        <PetitionDate>Publicação: { date } - { hour }</PetitionDate>
        <PetitionLink>
          <img src={ Eye } alt="View" />
          {" "}
          Pré-visualizar petição
        </PetitionLink>
      </PetitionFooter>
    </StyledPetitionCard>
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
