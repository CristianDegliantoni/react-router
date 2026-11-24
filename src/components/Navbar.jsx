import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">MyStore</NavLink>
      </div>
      <ul className="navbar-nav">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Chi siamo
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/prodotti" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Prodotti
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
