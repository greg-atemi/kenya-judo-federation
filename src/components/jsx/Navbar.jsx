import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <>
      <div>
        <ul className="topnav">
          <li className="logo">
              <div className="Logo-placeholder"></div>
          </li>
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
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar