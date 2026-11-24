import { Link } from 'react-router';

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Nuova Collezione 2026</span>
          <h1 className="hero-title">Trova i migliori prodotti al miglior prezzo</h1>
          <p className="hero-description">
            Benvenuto su <strong>MyStore</strong>, il tuo e-commerce di fiducia. Esplora la nostra selezione esclusiva di elettronica, abbigliamento, gioielli e molto altro.
          </p>
          <div className="hero-actions">
            <Link to="/prodotti" className="btn btn-primary">
              Esplora il Catalogo →
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Chi siamo
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=700&q=80" 
            alt="MyStore Vetrina E-Commerce" 
            className="hero-image" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Spedizione Veloce</h3>
          <p>Consegna in 24/48h gratuita per tutti gli ordini superiori a 50€.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Pagamenti Sicuri</h3>
          <p>Tutti i metodi di pagamento più affidabili e transazioni protette SSL.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⭐</div>
          <h3>Qualità Garantita</h3>
          <p>Prodotti autentici e resi facili entro 30 giorni dall'acquisto.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Supporto 24/7</h3>
          <p>Il nostro team di assistenza è a tua disposizione in qualsiasi momento.</p>
        </div>
      </section>
    </div>
  );
}
