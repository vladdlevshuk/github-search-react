import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg p-3'>
      <div className="navbar-brand">
        Github Поиск
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className='nav-link'>Главная</a>
        </li>
        <li className="nav-item">
          <a href="/about" className='nav-link'>Информация</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar