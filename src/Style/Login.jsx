import styled from 'styled-components';

export const Main = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const StyledInput = styled.input`
  margin: .7rem 0;
  outline: none;
  padding: .3rem;
  width: 95%;
`;

export const Label = styled.label`
  color: #949595;
`;

export const P = styled.p`
  color: #3575AB;
  margin: 1rem 0;
`;

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

export const Warning = styled.p`
  color: red;
  margin-top: 1rem;
`;