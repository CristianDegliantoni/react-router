import { useNavigate } from 'react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <h1 className="not-found-code">404</h1>
        <h2>Pagina non trovata</h2>
        <p>La pagina che stai cercando non esiste o è stata spostata.</p>
        <div className="not-found-actions">
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            ← Torna indietro
          </button>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Vai alla Home
          </button>
        </div>
      </div>
    </div>
  );
}
