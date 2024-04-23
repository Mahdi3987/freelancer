import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsNavOpen(event.target.checked);
  };

  return (
    <>
      <header>
        <div className="logo">EVLEARN</div>
        <input
          type="checkbox"
          id="nav_check"
          checked={isNavOpen}
          onChange={handleCheckboxChange}
          hidden
        />
        <nav className={isNavOpen ? 'open' : ''}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsNavOpen(false)}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsNavOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsNavOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsNavOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsNavOpen(false)}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="btn-link" onClick={() => setIsNavOpen(false)}>
                <button className="sign-up-btn">Sign up</button>
              </NavLink>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
