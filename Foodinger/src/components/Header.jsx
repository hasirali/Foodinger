import React from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [loginText, setLoginText] = useState("Login");

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <NavLink to="/" className="nav-link">
            <img src={logo} alt="logo Image" />
          </NavLink>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <NavLink to="/" className="nav-link" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">Conact Us</NavLink>
            </li>
            <li className="cart">
              <NavLink to="/cart" className="nav-link">
                <img src={cart} alt="" />
              </NavLink>
            </li>

            <button
              className="loginBtn"
              onClick={() => {
                if (loginText === "Login") {
                  setLoginText("Logout");
                } else {
                  setLoginText("Login");
                }
              }}
            >
              {loginText}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
