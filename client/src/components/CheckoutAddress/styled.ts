import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: ${({theme}) => theme.shadow.main};
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
  padding: 0 6rem
`;

export const Text = styled.p`
  font-size: large;
  font-weight: bold;
`;