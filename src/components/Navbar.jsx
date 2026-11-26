import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyStore</h2>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">Chi siamo</NavLink>
        <NavLink to="/prodotti">Prodotti</NavLink>
      </div>
    </nav>
  );
}
