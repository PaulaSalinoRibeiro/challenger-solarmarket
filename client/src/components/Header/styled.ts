import styled from 'styled-components';

export const Container = styled.header`
  background: ${({theme}) => theme.colors.secondary};
  display: flex;
  justify-content: end;
  padding: 2rem;
`;