import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import { FilterContext } from '../contexts/FilterContext';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Leggiamo il valore lowPrice dal Context
  const lowPrice = useContext(FilterContext);

  // 2. Stampiamo il valore in console
  console.log('lowPrice:', lowPrice);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="status-text">Caricamento prodotti...</p>;

  // 3. Se lowPrice è true filtriamo solo i prodotti con price <= 30
  const filteredProducts = lowPrice
    ? products.filter((product) => product.price <= 30)
    : products;

  return (
    <div className="container">
      <h1>I nostri Prodotti</h1>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">€ {product.price}</p>
            <Link to={`/prodotti/${product.id}`} className="btn">
              Vedi dettaglio
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
