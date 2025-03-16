import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroLista" className={`nav-link ${router.pathname === '/LivroLista' ? 'active' : ''}`}>Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroDados" className={`nav-link ${router.pathname === '/LivroDados' ? 'active' : ''}`}>Novo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
