import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 1300px) {
    padding-top: 2rem;
  }
`;

export const Img = styled.img`
  align-self: center;
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 10rem;

  @media(max-width: 1300px) {
    margin-top: 3rem;
  }

  @media(max-width: 1300px) {
    width: 6rem;
  }
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
