import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { ProductPage } from './components/products/productPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<ProductPage />} />
    </Routes>
  );
}
