import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

import * as S from './styled';

export function TotalPrice() {
  const { productsList } = useSelector((state: RootState) => state.shopCart);

  const totalPrice = productsList
  .reduce((acc: number, item: any) => acc += Number(item.price) * item.qty, 0);

  return (
    <>
      {
      productsList.length !== 0 && (
        <S.Container>
          Total R$ {totalPrice.toFixed(2).toString().replace(".", ",")}
        </S.Container>
      )
    }
    </>
  )
}