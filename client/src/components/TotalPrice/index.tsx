import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export function TotalPrice() {
  const { productsList } = useSelector((state: RootState) => state.shopCart);

  const totalPrice = productsList
  .reduce((acc: number, item: any) => acc += Number(item.price) * item.qty, 0);

  return (
    <p>
      Total R$ {totalPrice.toString().replace(".", ",")}
    </p>
  )
}