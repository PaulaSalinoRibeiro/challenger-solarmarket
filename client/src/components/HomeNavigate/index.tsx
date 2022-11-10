import { Link } from 'react-router-dom';

import * as S from './styled';
 
export function HomeNagivate() {
  return(
    <S.Container>
      <Link to="/">Voltar para Home</Link>
    </S.Container>
  )
}