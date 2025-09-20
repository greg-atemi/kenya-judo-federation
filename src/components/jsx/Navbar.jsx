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
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/clubs">Clubs</NavLink></li>
          <li><NavLink to="/fans">Fans</NavLink></li>
          <li><NavLink to="/ranking">Ranking</NavLink></li>
          <li><NavLink to="/kjf-history">KJF History</NavLink></li>
          <li><NavLink to="/judo-history">Judo History</NavLink></li>
          <li><NavLink to="/leadership">Our Leadership</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
