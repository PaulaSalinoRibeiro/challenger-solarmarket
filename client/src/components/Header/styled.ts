import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  padding: 2rem;
  background: ${({theme}) => theme.colors.secondary};
`;