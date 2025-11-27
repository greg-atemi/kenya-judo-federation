import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div className="Logo-placeholder"></div>
        </div>

        {/* Burger button */}
        <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`topnav ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/clubs" className={({ isActive }) => isActive ? "active" : ""}>
              Clubs
            </NavLink>
          </li>
          <li>
            <NavLink to="/fans" className={({ isActive }) => isActive ? "active" : ""}>
              Fans
            </NavLink>
          </li>
          <li>
            <NavLink to="/ranking" className={({ isActive }) => isActive ? "active" : ""}>
              Ranking
            </NavLink>
          </li>
          <li>
            <NavLink to="/kjf-history" className={({ isActive }) => isActive ? "active" : ""}>
              KJF History
            </NavLink>
          </li>
          <li>
            <NavLink to="/judo-history" className={({ isActive }) => isActive ? "active" : ""}>
              Judo History
            </NavLink>
          </li>
          <li>
            <NavLink to="/leadership" className={({ isActive }) => isActive ? "active" : ""}>
              Our Leadership
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactUs" className={({ isActive }) => isActive ? "active" : ""}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
