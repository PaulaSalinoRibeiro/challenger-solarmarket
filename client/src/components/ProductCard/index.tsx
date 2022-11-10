import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../app/shopCartSlice';

import * as S from './styled';

interface Props {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
}

export function ProductCard({ name, image, price, category, code, description }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.Image 
        src={image} 
        alt={name} 
      />
      <S.Price>R$ {price.replace(".", ",")}</S.Price>
      <S.BtnContainer>
        <S.Btn
          type="button"
          onClick={() => dispatch(addProduct({ name, image, price, category, code, description }))}
        >
          Adicionar ao Carrinho
        </S.Btn>
        <S.Btn
          type="button"
          onClick={() => navigate(`/details/${code}`) }
        >
          Ver detalhes
        </S.Btn>
      </S.BtnContainer>
    </S.Container>
  )
}