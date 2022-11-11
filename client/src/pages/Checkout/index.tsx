import { useEffect, useState } from 'react';
import { IProduct } from '../../app/types';
import { CheckoutAddress } from '../../components/CheckoutAddress';
import { CheckoutCard } from '../../components/CheckoutCard';

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


  useEffect(() => {
    const savedBought = JSON.parse(localStorage.getItem('@shopHistory') || '')!

    setProducts(savedBought.productsList);
    setAddress(savedBought.address);
  }, []);

  return (
    <>
      {
        products && address && <h1>Compra finalizada com sucesso!</h1>
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
    </>
  )
}