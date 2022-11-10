import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  font-size: large;
  font-weight: bold;
`;

export const Select = styled.select`
  margin-left: 1rem;
  padding: .5rem;
`;

export const Button = styled.button`
  background: ${({theme}) => theme.colors.secondary};
  border: none;
  border-radius: .4rem;
  padding: .5rem 2rem;
  margin-left: 1rem;
  color: ${({theme}) => theme.colors.terciary};
  font-weight: bold;
  font-size: large;
`;