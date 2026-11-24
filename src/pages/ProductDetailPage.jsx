import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Validazione preventiva dell'id
    if (!id || isNaN(Number(id))) {
      navigate('/prodotti', { replace: true });
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setErrorMessage('');

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error(`Impossibile reperire il prodotto (status ${response.status})`);
        }

        const data = await response.json();

        // fakestoreapi restituisce null o oggetto vuoto quando un id non esiste
        if (!data || Object.keys(data).length === 0 || !data.id) {
          throw new Error(`Prodotto con ID #${id} non trovato.`);
        }

        setProduct(data);
      } catch (err) {
        setErrorMessage(err.message || 'Errore nel caricamento del prodotto.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  // Gestione errore con useNavigate
  const handleRedirectToProducts = () => {
    navigate('/prodotti');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="state-message loading-state">
        <div className="spinner"></div>
        <p>Caricamento dettagli prodotto #{id}...</p>
      </div>
    );
  }

  if (errorMessage || !product) {
    return (
      <div className="product-detail-error">
        <div className="error-card">
          <span className="error-icon">🔍</span>
          <h2>Prodotto non trovato</h2>
          <p>{errorMessage || 'Non è stato possibile trovare il prodotto richiesto.'}</p>
          <div className="error-actions">
            <button onClick={handleGoBack} className="btn btn-secondary">
              ← Torna indietro
            </button>
            <button onClick={handleRedirectToProducts} className="btn btn-primary">
              Tutti i Prodotti
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/prodotti">Prodotti</Link> / <span>{product.title}</span>
      </nav>

      <div className="product-detail-card">
        <div className="detail-image-wrapper">
          <img src={product.image} alt={product.title} className="detail-image" />
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-title">{product.title}</h1>

          {product.rating && (
            <div className="detail-rating">
              <span className="stars">⭐ {product.rating.rate} / 5</span>
              <span className="reviews">({product.rating.count} recensioni)</span>
            </div>
          )}

          <div className="detail-price-box">
            <span className="detail-price">€ {product.price.toFixed(2)}</span>
            <span className="tax-included">IVA inclusa</span>
          </div>

          <div className="detail-description">
            <h3>Descrizione</h3>
            <p>{product.description}</p>
          </div>

          <div className="detail-actions">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => alert(`Aggiunto "${product.title}" al carrello!`)}
            >
              🛒 Aggiungi al Carrello
            </button>
            <button 
              onClick={handleGoBack} 
              className="btn btn-secondary btn-large"
            >
              ← Torna indietro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
