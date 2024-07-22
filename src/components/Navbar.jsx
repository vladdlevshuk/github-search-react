import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand px-5 py-3'>
      <div className="container">
        <Link to="/" className='navbar-brand'>
          Github Поиск
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className='nav-link'>
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className='nav-link'>
                Информация
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
