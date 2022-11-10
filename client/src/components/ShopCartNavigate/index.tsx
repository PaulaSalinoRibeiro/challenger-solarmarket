import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export function ShopCartNavigate() {
  const navigate = useNavigate();

  return (
    <S.Container
      type="button"
      onClick={() => navigate("/cart-shop")}
    >
      🛒
    </S.Container>
  )
}