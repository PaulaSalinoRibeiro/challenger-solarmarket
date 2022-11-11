import { useEffect, useState } from 'react';
import { fetchApi } from '../../api';
import { IProduct } from '../../app/types';
import { CheckoutCard } from '../../components/CheckoutCard';

// interface Address {
//   bairro: string,
//   localidade: string,
//   logradouro: string,
//   uf: string,
//   cep: string,
// };

// interface HistoryBought {
//   code: string[],
//   address: Address
// }

export function Checkout() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [address, setAddress] = useState(null);


  useEffect(() => {
    const savedBought = JSON.parse(localStorage.getItem('@shopHistory') || '')!

    setProducts(savedBought.productsList);
    setAddress(savedBought.address);
  }, []);

  return (
    <>
      {
        products && (products.map((product) => (
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
        
      }
    </>
  )
}