import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export function ShopCart() {
  const { productsList } = useSelector((state: RootState ) => state.shopCart );

  return (
    <>
      <h1>ShopCart Page</h1>
      {
        productsList.length === 0 && <h1>Seu carrinho está vazio</h1>
      }
      <div>
        {
          productsList && productsList.map(product => (
            <div key={product.code}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.qty}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}