import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Errore nel caricamento prodotti:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="status-text">Caricamento prodotti...</p>;
  }

  return (
    <div className="container">
      <h1>I nostri Prodotti</h1>
      <div className="products-grid">
        {products.map((product) => (
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
