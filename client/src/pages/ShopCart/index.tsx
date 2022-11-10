import { HomeNagivate } from '../../components/HomeNavigate';
import { ProductShopCart } from '../../components/ProductShopCart';
import { useSelector , useDispatch} from 'react-redux';
import { RootState } from '../../app/store';
import { addSavedItens } from '../../app/shopCartSlice';
import { useEffect } from 'react';
import { AddressForm } from '../../components/AddressForm';

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
      <h1>ShopCart Page</h1>
      <HomeNagivate />
      {
        productsList.length === 0 
        && productsSaved.length === 0 
        && <h1>Seu carrinho está vazio</h1>
      }
      <div>
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
      </div>
      <div>
        {
          productsList.length !== 0 && <AddressForm />
        }
      </div>
    </>
  )
}