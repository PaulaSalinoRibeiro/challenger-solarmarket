import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  background: ${({theme}) => theme.colors.terciary};
  border: none;
  border-radius: .4rem;
  padding: 0 2rem;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: bold;
  font-size: xx-large;
`;


export const Qty = styled.p`
  font-size: x-large;
  font-weight: bold;
  padding: 0 1rem;
`;