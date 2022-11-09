import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../app/shopCartSlice';

type Props = {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
}

export function ManagerQty({ name, image, price, category, code, description }: Props) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);

  const handleIncrease = () => {
    setQty(qty + 1);
    dispatch(addProduct({
      name,
      image,
      price,
      category,
      code,
      description,
      qty: qty + 1,
    }))
  };

  const handleDecrease = () => {
    if (qty <= 0 ) {
      return setQty(0);
    };

    setQty(qty -1);
    dispatch(removeProduct({
      name,
      image,
      price,
      category,
      code,
      description,
      qty: qty - 1,
    }))
  };
  return (
    <div>
        <button
          type="button"
          onClick={() => handleIncrease()}
        >
          +
        </button>
        <div>{qty}</div>
        <button
          type="button"
          onClick={() => handleDecrease()}
        >
          -
        </button>
      </div>
  )
}