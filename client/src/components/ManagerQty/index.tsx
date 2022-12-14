import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../app/shopCartSlice';

import * as S from './styled';

interface Props {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
}

export function ManagerQty({ name, image, price, category, code, description }: Props) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);

  const handleIncrease = () => {
    setQty(qty + 1);

    dispatch(addProduct({
      name,
      image,
      price,
      category,
      code,
      description,
    }));
  };

  const handleDecrease = () => {
    if (qty <= 0 ) {
      return setQty(0);
    };

    setQty(qty -1);

    dispatch(removeProduct({
      name,
      image,
      price,
      category,
      code,
      description,
    }));
  };
  return (
    <S.Container>
      <S.Btn
        type="button"
        onClick={() => handleIncrease()}
      >
        +
      </S.Btn>
      <S.Qty>{qty}</S.Qty>
      <S.Btn
        type="button"
        onClick={() => handleDecrease()}
      >
        -
      </S.Btn>
    </S.Container>
  )
}