import { useNavigate } from 'react-router-dom';

export function ShopCartNavigate() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/cart-shop")}
    >
      🛒
    </button>
  )
}