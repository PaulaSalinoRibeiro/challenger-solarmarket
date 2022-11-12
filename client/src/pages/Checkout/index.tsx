import { useEffect, useState } from 'react';
import { IProduct } from '../../app/types';
import { CheckoutAddress } from '../../components/CheckoutAddress';
import { CheckoutCard } from '../../components/CheckoutCard';
import { HomeNagivate } from '../../components/HomeNavigate';

import * as S from './styled';

interface Address {
  neighborhood: string,
  local: string,
  street: string,
  uf: string,
  cep: string,
};

export function Checkout() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [address, setAddress] = useState<Address | null>(null);

  const total = products.reduce((acc: number, item: any) => acc += Number(item.price) * item.qty, 0);

  useEffect(() => {
    const savedBought = JSON.parse(localStorage.getItem('@shopHistory') || '')!

    setProducts(savedBought.productsList);
    setAddress(savedBought.address);
  }, []);

  return (
    <S.Container>
      <HomeNagivate />
      {
        products && address && <S.Title>Sua compra foi finalizada com sucesso!</S.Title>
      }
      {
        products && address && (products.map((product) => (
          <CheckoutCard 
            name={product.name}
            price={product.price}
            qty={product.qty || 0}
            image={product.image}
            key={product.code}
          />
        )))
      }
      <div>
        <S.Total>
          Total: R$ {total.toFixed(2)
          .toString().replace(".",",")}
        </S.Total>
      </div>
      {
        products && address && (
        <CheckoutAddress 
          neighborhood={address.neighborhood}
          street={address.street}
          uf={address.uf}
          cep={address.cep}
          local={address.local}
        />)
      }
    </S.Container>
  )
}