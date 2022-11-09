import { Route, Routes } from 'react-router-dom';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { ShopCart } from '../pages/ShopCart';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:code" element={<Details/>} />
      <Route path="/cart-shop" element={<ShopCart/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}