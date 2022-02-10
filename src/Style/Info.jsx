import styled from 'styled-components';

export const StyledInfo = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCard = styled.div`
  box-shadow: 0 0 1rem lightgrey;
  margin: 1rem 2rem;
  padding: 2rem 5rem;
`;

export const StyledCardTitle = styled.h2`
  opacity: .7
`;

export const StyledCardTotal = styled.p`
  font-size: 2.5rem;

  color: ${props => {
    if (props.tipo === 'CLIENTES') {
      return '#1B77C5'
    } else if (props.tipo === 'CALCULOS') {
      return '#FF8853'
    } else if (props.tipo === 'PETICOES') {
      return '#00A881'
    }
    return '#6838B7'
  }}
`;

export const StyledCardMensal = styled.p`
  color: grey;
  margin-top: .5rem;
`;