import React from 'react'
import logo from './assets/logo.png';

function Header() {
  return (
    <>
      <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo Image" />
        </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Conact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header;
