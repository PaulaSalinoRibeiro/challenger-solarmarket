import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 2rem;
  box-shadow: ${({theme}) => theme.shadow.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin: 1.5rem;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 8rem;
  margin: 0 auto;
`;

export const Price = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`;

export const Btn= styled.button`
  background: ${({theme}) => theme.colors.terciary};
  border: none;
  border-radius: .4rem;
  padding: .5rem 2rem;
  margin-left: 1rem;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: bold;
  font-size: large;
`;

