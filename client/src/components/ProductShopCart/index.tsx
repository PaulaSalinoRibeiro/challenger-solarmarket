import { useDispatch } from 'react-redux';
import { addProduct, removeProduct, deleteProduct } from '../../app/shopCartSlice';

import * as S from './styled';

type Props = {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
  qty: number,
}

export function ProductShopCart({ name, image, price, category, code, description, qty }: Props) {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Image
        src={image}
        alt={name}
      />
      <S.Text>{name}</S.Text>
      <S.Text>R$ {price.replace(".", ",")}</S.Text>
      <S.ManagerContainer>
        <S.Btn
          type="button"
          onClick={() => dispatch(addProduct(
            {name, image, price, category, code, description}
            ))}
        >
          +
        </S.Btn>
        <S.Text>{qty}</S.Text>
        
        <S.Btn
          type="button"
          disabled={qty === 0}
          onClick={() => dispatch(removeProduct(
            {name, image, price, category, code, description}
            ))}
        >
          -
        </S.Btn>
        <S.DeleteBtn
          type="button"
          onClick={() => dispatch(deleteProduct(
            {name, image, price, category, code, description}
          ))}
        >
          Remover
        </S.DeleteBtn>
      </S.ManagerContainer>
    </S.Container>
  )
}