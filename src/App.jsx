import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';

import './styles/reset.scss';

export function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
