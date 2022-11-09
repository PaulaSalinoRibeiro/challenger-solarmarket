import { fetchApi } from '../../api';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Header } from '../../components/Header';

interface IProduct {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
}

export function Home() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [alert, setAlert] = useState(false)
  useEffect(() => {
    fetchApi('products')
    .then(result => setProducts(result))
    .catch(error => setAlert(true))
  }, [])

  return (
    <>
      <h1>Home Page</h1>
      <Header />
      <div>
        {
          products && products.map(product => (
            <ProductCard 
              name={product.name} 
              image={product.image} 
              price={product.price}
              code={product.code}
              key={product.code}
            />))
        }
      </div>
      <div>
        {
          alert && <h1>Desculpe, não é possivel exibir os produtos!</h1>
        }
      </div>
    </>
  )
}