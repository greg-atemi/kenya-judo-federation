import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Background overlay */}
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}

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
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/clubs">Clubs</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/fans">Fans</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/ranking">Ranking</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/kjf-history">KJF History</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/judo-history">Judo History</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/leadership">Our Leadership</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/contactUs">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
