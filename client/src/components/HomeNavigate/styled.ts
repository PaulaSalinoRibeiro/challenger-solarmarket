import styled from 'styled-components';

export const Container = styled.div`
 padding: 2rem;

 a {
   color: ${({theme}) => theme.colors.textLight};
   font-size: large;
   text-decoration: none;
 }
`;