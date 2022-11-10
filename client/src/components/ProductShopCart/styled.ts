import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 1rem;
  width: 80%;
`;

export const Image = styled.img`
  width: 6rem;
`;

export const Text = styled.p`
  font-size: large;
  font-weight: bold;
`;

export const ManagerContainer = styled.div`
   display: flex;
`;

export const Btn = styled.button`
  background: ${({theme}) => theme.colors.terciary};
  border: none;
  border-radius: .4rem;
  padding: 0 1rem;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: bold;
  font-size: large;
  margin: 1rem;
`;

export const DeleteBtn = styled.button`
  background: ${({theme}) => theme.colors.terciary};
  border: none;
  border-radius: .4rem;
  padding: .5rem 1rem;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: bold;
  font-size: large;
  margin: 1rem;
`;