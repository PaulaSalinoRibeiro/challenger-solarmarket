import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchApi } from '../../api';
import { IProduct } from '../../app/types';
import { Header } from '../../components/Header';
import { DetailProductCard } from '../../components/DetailProductCard';
import { HomeNagivate } from '../../components/HomeNavigate';

import * as S from './styled';

export function Details() {
  const { code } = useParams();
  const [detailsProduct, setDetaislProduct] = useState<IProduct>();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    fetchApi(`products/${code}`)
    .then(result => setDetaislProduct(result))
    .catch(error => setAlert(error))
  }, [code]);

  return (
    <>
      <Header />
      <HomeNagivate />
      {
        detailsProduct && (
          <DetailProductCard 
            name={detailsProduct.name}
            price={detailsProduct.price}
            category={detailsProduct.category}
            description={detailsProduct.description}
            code={detailsProduct.code}
            image={detailsProduct.image}
          />
        )
      }
      <S.Container>
        {
          alert && <S.Alert>Desculpe, não é possivel exibir o produto!</S.Alert>
        }
      </S.Container>
    </>
  )
}