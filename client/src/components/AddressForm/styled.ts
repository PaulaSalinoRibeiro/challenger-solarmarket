import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const CepContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const CepForm = styled.form`
  label {
    font-size: large;
    font-weight: bold;
    margin-right: 2rem;
  }

  input {
    padding: .5rem 2rem;
    margin-left: 1rem;
    font-size: large;
  }
`;

export const Btn = styled.button`
  background: ${({theme}) => theme.colors.terciary};
  border: none;
  border-radius: .4rem;
  padding: .5rem 2rem;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: bold;
  font-size: large;

  :disabled {
    color: ${({theme}) => theme.colors.terciary};
    background: ${({theme}) => theme.colors.secondary};
  }
`;

export const Alert = styled.p`
  margin-left: 2rem;
  font-size: large;
  font-weight: bold;
  color: red;
`;

export const FormAddress = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  label {
    font-size: large;
    font-weight: bold;
    margin-right: 2rem;
  }

  input {
    padding: .5rem 2rem;
    margin-left: 1rem;
    font-size: large;
  }
`