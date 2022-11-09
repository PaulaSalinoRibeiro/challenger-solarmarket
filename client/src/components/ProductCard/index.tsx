import { useNavigate } from 'react-router-dom';
import { ManagerQty } from '../ManagerQty';

type Props = {
  name: string,
  code: string,
  price: string,
  image: string,
}

export function ProductCard({ name, image, price, code }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>R$ {price.replace(".", ",")}</p>
      <button
        type="button"
        onClick={() => navigate(`/details/${code}`) }
      >
        Ver detalhes
      </button>
    </>
  )

}