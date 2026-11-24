import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

export default function DefaultLayout() {
  return (
    <div className="app-layout">
      <header>
        <Navbar />
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
