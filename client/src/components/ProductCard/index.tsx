import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../app/shopCartSlice';


type Props = {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
}

export function ProductCard({ name, image, price, category, code, description }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>R$ {price.replace(".", ",")}</p>
      <div>
        <button
          type="button"
          onClick={() => dispatch(addProduct({ name, image, price, category, code, description }))}
        >
          Adicionar ao Carrinho
        </button>
        <button
          type="button"
          onClick={() => navigate(`/details/${code}`) }
        >
          Ver detalhes
        </button>
      </div>
    </>
  )
}