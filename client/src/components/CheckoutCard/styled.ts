import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  box-shadow: ${({theme}) => theme.shadow.main};
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
`;

export const Image = styled.img`
  width: 4rem;
`;

export const Text = styled.p`
  font-size: larger;
  font-weight: bold;
`;