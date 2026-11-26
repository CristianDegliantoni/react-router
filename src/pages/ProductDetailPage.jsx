import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

export default function ProductDetailPage() {
  // 1. Recuperiamo l'id dalla rotta parametrica con useParams
  const { id } = useParams();

  // 2. Hook useNavigate per spostarci tra le pagine da codice
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Prodotto non trovato');
        }
        return res.json();
      })
      .then((data) => {
        // FakeStore API restituisce un oggetto vuoto o nullo se l'id non esiste
        if (!data || !data.id) {
          throw new Error('Prodotto inesistente');
        }
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert('Prodotto non trovato! Verrai reindirizzato alla lista prodotti.');
        // Gestione errore: usiamo navigate per tornare alla lista prodotti
        navigate('/prodotti');
      });
  }, [id, navigate]);

  if (loading) {
    return <p className="status-text">Caricamento dettaglio prodotto...</p>;
  }

  if (!product) return null;

  return (
    <div className="container detail-container">
      {/* Bottone per tornare indietro usando navigate(-1) */}
      <button onClick={() => navigate(-1)} className="btn-back">
        ← Torna indietro
      </button>

      <div className="detail-card">
        <img src={product.image} alt={product.title} />
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="price">€ {product.price}</p>
          <p className="category">Categoria: {product.category}</p>
          <p className="description">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
