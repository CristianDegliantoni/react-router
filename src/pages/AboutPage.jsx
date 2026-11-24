import { Link } from 'react-router';

export default function AboutPage() {
  return (
    <div className="page-container about-page">
      <div className="about-header">
        <span className="section-tag">La nostra storia</span>
        <h1>Chi siamo</h1>
        <p className="lead-text">
          Nati con l'obiettivo di rendere lo shopping online accessibile, sicuro ed entusiasmante per tutti.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text-block">
          <h2>La nostra Missione</h2>
          <p>
            In <strong>MyStore</strong> crediamo che l'esperienza d'acquisto debba essere trasparente, intuitiva e piacevole. 
            Selezioniamo accuratamente ogni fornitore e articolo per offrirti sempre il perfetto equilibrio tra qualità, innovazione e prezzo.
          </p>
          <p>
            Dal 2020 ad oggi abbiamo servito più di 100.000 clienti in tutta Europa, mantenendo sempre al centro le persone e la cura per il dettaglio.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">10k+</span>
            <span className="stat-label">Clienti soddisfatti</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">500+</span>
            <span className="stat-label">Prodotti a catalogo</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">99.8%</span>
            <span className="stat-label">Recensioni positive</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24h</span>
            <span className="stat-label">Tempo medio di spedizione</span>
          </div>
        </div>
      </div>

      <div className="about-values">
        <h2>I Nostri Valori Fondamentali</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Trasparenza</h3>
            <p>Nessun costo nascosto. Quello che vedi è esattamente ciò che paghi e ricevi a casa.</p>
          </div>
          <div className="value-item">
            <h3>Sostenibilità</h3>
            <p>Imballaggi riciclati al 100% e logistica a basso impatto ambientale.</p>
          </div>
          <div className="value-item">
            <h3>Innovazione Continua</h3>
            <p>Aggiorniamo costantemente la nostra piattaforma web per offrirti la migliore esperienza.</p>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h3>Vuoi dare un'occhiata alle nostre novità?</h3>
        <Link to="/prodotti" className="btn btn-primary">
          Vai al Catalogo Prodotti →
        </Link>
      </div>
    </div>
  );
}
