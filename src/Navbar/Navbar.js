import React, { useState } from 'react';
import './Navbar.css';
import { FiAlignJustify } from 'react-icons/fi';
import { IoMenu, IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import logo from './image3.png';

const Navbar = ({ onSearch }) => {
  const [showIcons, setShowIcons] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setShowIcons(!showIcons);
  };

  const closeMenu = () => {
    setShowIcons(false);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Trigger search action with the search query
    onSearch(searchQuery.trim());

    // Clear the search query after submission
    setSearchQuery('');
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <a href="/">
            <img src={logo} alt="Logo" className="logo-img" style={{ width: '80px', height: '60px' }} />
          </a>
        </h2>
      </div>
      <div className={`navbar-links ${showIcons ? 'active' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About Us
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
          Contact Us
        </NavLink>
        <NavLink to="/services" className="nav-link" onClick={closeMenu}>
          Our Services
        </NavLink>
      </div>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <NavLink to="/login" className="btn1" onClick={closeMenu}>
        Login
      </NavLink>
      <NavLink to="/signup" className="btn2" onClick={closeMenu}>
        Sign Up
      </NavLink>

      <div className="Menu" onClick={toggleMenu}>
        {showIcons ? <IoClose /> : <FiAlignJustify />}
      </div>
    </nav>
  );
};

export default Navbar;
