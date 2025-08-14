import { useState } from 'react'
import './Navbar.css'

function App() {

  return (
    <>
      <ul className="topnav">
        <li className="logo"><div className="Logo-placeholder" /></li>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#clubs">Clubs</a></li>
        <li><a href="#fans">Fans</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#ranking">Ranking</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
    </ul>
    </>
  )
}

export default App
