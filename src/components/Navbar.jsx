import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const burgerIconStyle = {
    width: '1.5em',
    height: '1.5em',
    display: 'inline-block',
    background: isOpen
      ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M6 18L18 6M6 6l12 12\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E") no-repeat center center'
      : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M4 6h16M4 12h16M4 18h16\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\'/%3E%3C/svg%3E") no-repeat center center',
    backgroundSize: 'contain',
  };

  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg fixed-top px-5 py-3'>
      <div className='container' ref={menuRef}>
        <Link to="/" className='navbar-brand fs-4'>
          GH-Поиск
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={toggleMenu}
          aria-controls='navbarNav'
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' style={burgerIconStyle}></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav mx-auto fs-5'>
            <li className='nav-item'>
              <Link to="/" className='nav-link' onClick={closeMenu}>
                Главная
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" className='nav-link' onClick={closeMenu}>
                Информация
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
