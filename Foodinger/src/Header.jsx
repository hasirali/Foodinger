import React from 'react'
import logo from './assets/logo.png';
import cart from './assets/cart.svg';


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
          <li className='cart'>
            <img src={cart} alt="" />

            
            
            </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header;
