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

  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg fixed-top px-5 py-3'>
      <div className='container' ref={menuRef}>
        <Link to="/" className='navbar-brand'>
          Github Поиск
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={toggleMenu}
          aria-controls='navbarNav'
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
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
