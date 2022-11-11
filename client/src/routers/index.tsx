import { Route, Routes } from 'react-router-dom';
import { Checkout } from '../pages/Checkout';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { ShopCart } from '../pages/ShopCart';
import { NotFound } from '../pages/NotFound';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:code" element={<Details/>} />
      <Route path="/cart-shop" element={<ShopCart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}