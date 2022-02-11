import styled from 'styled-components';

export const Button = styled.button`
  background-color: #F26526;
  border: none;
  color: white;
  font-weight: bold;
  padding: .5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1rem;
`;

export const P = styled.p`
  margin: .5rem 0;

  @media(max-width: 900px) {
    font-size: .9rem;
  }
`;

export const Span = styled.span`
  color: #3575AB;
  font-weight: bold;

  @media(max-width: 900px) {
    font-size: .9rem;
  }
`;
