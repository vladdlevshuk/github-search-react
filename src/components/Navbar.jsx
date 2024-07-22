import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg px-5 py-3'>
      <div className="navbar-brand">
        Github Поиск
      </div>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" className='nav-link'>Главная</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className='nav-link'>Информация</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar