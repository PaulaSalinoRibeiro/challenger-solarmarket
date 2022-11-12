import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;


export const Title = styled.h1`
  font-size: x-large;
  color: ${({theme}) => theme.colors.textLight};
  margin: 0 auto;
  margin-bottom: 4rem;
`;

export const Total = styled.h3`
  display: flex;
  border-radius: 1rem;
  justify-content: center;
  background: ${({theme}) => theme.colors.terciary};
  padding: 1rem;
  width: 20%;
  margin: 0 auto;
`;
