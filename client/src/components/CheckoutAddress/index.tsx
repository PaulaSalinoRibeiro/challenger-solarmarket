import * as S from './styled';

interface Address {
  neighborhood: string,
  local: string,
  street: string,
  uf: string,
  cep: string,
};

export function CheckoutAddress({neighborhood, local, street, uf, cep}: Address) {
  return (
    <S.Container>
      <S.Text>Rua: {street}</S.Text>
      <S.Text>Cidade: {local}</S.Text>
      <S.Text>Bairro: {neighborhood}</S.Text>
      <S.Text>Estado: {uf}</S.Text>
      <S.Text>CEP: {cep}</S.Text>
    </S.Container>
  )
}