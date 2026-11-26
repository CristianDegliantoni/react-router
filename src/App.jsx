import { BrowserRouter, Routes, Route } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="prodotti" element={<ProductsPage />} />
          <Route path="prodotti/:id" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
