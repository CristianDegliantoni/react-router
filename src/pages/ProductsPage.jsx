import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Impossibile caricare i prodotti.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>I Nostri Prodotti</h1>
        <p>Esplora la nostra collezione di articoli selezionati da FakeStore API</p>
      </div>

      {loading && (
        <div className="state-message loading-state">
          <div className="spinner"></div>
          <p>Caricamento prodotti in corso...</p>
        </div>
      )}

      {error && (
        <div className="state-message error-state">
          <p>⚠️ Si è verificato un errore: {error}</p>
          <button 
            className="btn btn-secondary" 
            onClick={() => window.location.reload()}
          >
            Riprova
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="product-image" 
                  loading="lazy"
                />
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h2 className="product-title" title={product.title}>
                  {product.title}
                </h2>
                
                <div className="product-footer">
                  <span className="product-price">
                    € {product.price.toFixed(2)}
                  </span>
                  <Link 
                    to={`/prodotti/${product.id}`} 
                    className="btn btn-detail"
                  >
                    Dettaglio →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
