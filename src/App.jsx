import { BrowserRouter, Routes, Route } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { FilterContext } from './contexts/FilterContext';

export default function App() {
  // Cambia questo valore in true o false per testare il filtro
  const lowPrice = false;

  return (
    <FilterContext.Provider value={lowPrice}>
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
    </FilterContext.Provider>
  );
}
