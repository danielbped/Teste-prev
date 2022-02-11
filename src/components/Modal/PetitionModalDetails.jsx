import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  P,
  Span,
  Title,
} from '../../Style/PetitionModal'
import DataContext from '../../context/DataContext';
import {
  nameToLowerCase,
  dateHandler,
} from '../../utils/stringHandler';

const PetitionModalDetails = ({ petition }) => {
  const { setShowPetitionModal } = useContext(DataContext);

  const {
    id,
    titulo,
    resumo,
    status,
    sexo,
    tipoDeProcesso,
    tipoDeAcao,
    subtipo,
    carenciaMinima,
    criadoPor,
    dataDeCriacao,
    atualizadoPor,
    dataDaUltimaAtualizacao,
  } = petition;

  return (
    <Modal>
      <Title>{ titulo }</Title>
      <P><Span>ID da petição: </Span>{ id }</P>
      <P><Span>Tipo: </Span>{ nameToLowerCase(subtipo[0]) }</P>
      <P><Span>Resumo: </Span>{ resumo }</P>
      <P><Span>Sexo: </Span>{ nameToLowerCase(sexo) }</P>
      <P><Span>Status: </Span>{ nameToLowerCase(status) }</P>
      <P><Span>Tipo de processo: </Span>{ nameToLowerCase(tipoDeProcesso) }</P>
      <P><Span>Tipo de ação: </Span>{ nameToLowerCase(tipoDeAcao) }</P>
      <P><Span>Carência Mínima: </Span>{ carenciaMinima }</P>
      <P><Span>Criado por: </Span>{ criadoPor }</P>
      <P><Span>Data de criação: </Span>{ dateHandler(dataDeCriacao) }</P>
      <P><Span>Atualizado por: </Span>{ atualizadoPor }</P>
      <P><Span>Data de atualização: </Span>{ dateHandler(dataDaUltimaAtualizacao) }</P>
      <Button
        type="button"
        onClick={() => setShowPetitionModal(false)}
      >
        Fechar
      </Button>
    </Modal>
  )
}

PetitionModalDetails.propTypes = {
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
}

export default PetitionModalDetails;
