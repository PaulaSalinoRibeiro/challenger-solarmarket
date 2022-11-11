import { HomeNagivate } from '../../components/HomeNavigate';
import { ProductShopCart } from '../../components/ProductShopCart';
import { useSelector , useDispatch} from 'react-redux';
import { RootState } from '../../app/store';
import { addSavedItens } from '../../app/shopCartSlice';
import { useEffect } from 'react';
import { AddressForm } from '../../components/AddressForm';

import * as S from './styled';
import { TotalPrice } from '../../components/TotalPrice';

interface Product {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
  qty: number,
}

export function ShopCart() {
  const productsSaved: Product[] = JSON.parse(localStorage.getItem('@shopCart')!) || []
  const { productsList } = useSelector((state: RootState) => state.shopCart );
  const dispatch = useDispatch();

  useEffect(() => {
    if(productsList.length === 0) {
      dispatch(addSavedItens(productsSaved))
    }
  }, [dispatch])

  return (
    <>
      <HomeNagivate />
      {
        productsList.length === 0 
        && productsSaved.length === 0 
        && <S.Alert>Seu carrinho está vazio</S.Alert>
      }
      <S.Container>
        {
          productsList && productsList.map(product => (
            <ProductShopCart
              key={product.code}
              name={product.name}
              price={product.price}
              category={product.category}
              description={product.description}
              code={product.code}
              image={product.image}
              qty={product.qty || 0}
            />
          ))
        }
      </S.Container>
      <TotalPrice/>
      <S.AddressContainer>
        {
          productsList.length !== 0 && <AddressForm />
        }
      </S.AddressContainer>
    </>
  )
}