import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { ProductPage } from './components/products/productPage';
import { ProductDetailsPage } from './components/products/productDetails/productDetailsPage';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Guarantee } from './components/guarantee/guarantee';
import { Faq } from './components/faq/faq';
import { Terms } from './components/terms/terms';
import { Privacy } from './components/privacy/privacy';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<ProductPage />} />
      <Route path="/produto/:slug" element={<ProductDetailsPage />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/garantia" element={<Guarantee />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/termos" element={<Terms />} />
      <Route path="/privacidade" element={<Privacy />} />
    </Routes>
  );
}
