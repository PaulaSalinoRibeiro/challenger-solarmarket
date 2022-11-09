import { useDispatch } from 'react-redux';
import { addProduct, removeProduct, deleteProduct } from '../../app/shopCartSlice';

type Props = {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
  qty: number,
}

export function ProductShopCart({ name, image, price, category, code, description, qty }: Props) {
  const dispatch = useDispatch();

  return (
    <div>
      <img
        src={image}
        alt={name}
      />
      <p>{name}</p>
      <div>
        <button
          type="button"
          onClick={() => dispatch(addProduct(
            {name, image, price, category, code, description}
            ))}
        >
          +
        </button>
        <p>{qty}</p>
        <p>R$ {price.replace(".", ".")}</p>
        <button
          type="button"
          disabled={qty === 0}
          onClick={() => dispatch(removeProduct(
            {name, image, price, category, code, description}
            ))}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => dispatch(deleteProduct(
            {name, image, price, category, code, description}
          ))}
        >
          🗑
        </button>
      </div>
    </div>
  )
}