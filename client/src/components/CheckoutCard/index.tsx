import * as S from './styled';

interface Product {
  name: string,
  price: string,
  image: string,
  qty: number,
}

export function CheckoutCard({name, price, image, qty}:Product) {
  return (
    <S.Container>
      <S.Image
        src={image} 
        alt={name} 
      />
      <S.Text>{name}</S.Text>
      <S.Text>R$ {price.replace(".", ",")}</S.Text>
      <S.Text>{qty}</S.Text>
      <S.Text>
        SubTotal R$ {(qty * Number(price))
        .toFixed(2).toString().replace(".", ",")}
      </S.Text>
    </S.Container>
  )
}