import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #3575AB;
  margin: 1rem 0;
`;

export const Img = styled.img`
  align-self: center;
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 10rem;
`;

export const P = styled.p`
  margin: .5rem 0;
`;

export const Span = styled.span`
  color: #3575AB;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #F26526;
  border: none;
  color: white;
  font-weight: bold;
  padding: .5rem;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  font-weight: bold;
  padding: .5rem;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
