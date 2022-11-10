import { fetchApi } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../app/filterProductSlice';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Header } from '../../components/Header';
import { RootState } from '../../app/store';
import { SearchByCategory } from '../../components/SearchByCategory';

import * as S from './styled';

export function Home() {
  const dispatch = useDispatch();
  const { productsFilter } = useSelector((state: RootState) => state.filters)
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    fetchApi('products')
    .then(result => dispatch(setProducts(result)))
    .catch(error => setAlert(true))
  }, [dispatch])

  return (
    <S.Container>
      <Header />
      <SearchByCategory />
      <S.Products>
        {
          productsFilter && productsFilter.map(product => (
            <ProductCard 
              name={product.name}
              description={product.description}
              category={product.category}
              image={product.image} 
              price={product.price}
              code={product.code}
              key={product.code}
            />))
        }
      </S.Products>
      <S.Alert>
        {
          alert && <h1>Desculpe, não é possivel exibir os produtos!</h1>
        }
      </S.Alert>
    </S.Container>
  )
}