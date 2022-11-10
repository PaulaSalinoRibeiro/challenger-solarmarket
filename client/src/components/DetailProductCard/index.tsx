import { ManagerQty } from '../ManagerQty';

import * as S from './styled';

interface Props {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
}

export function DetailProductCard({ name, image, price, category, code, description }: Props) {
  return (
    <S.Container>
      <S.Image
        src={image}
        alt={name}
      />
      <S.Infos>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Category>{category}</S.Category>
        <S.Price>R$ {price.replace(".", ",")}</S.Price>
        <ManagerQty 
          name={name}
          image={image}
          price={price}
          category={category}
          code={code}
          description={description}
        />
      </S.Infos>
    </S.Container>
  )
}