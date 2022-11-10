import styled from 'styled-components';

export const Container = styled.button`
  background: ${({theme}) => theme.colors.terciary};
  border: none;
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 1rem 3rem;
`;