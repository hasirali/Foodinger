import React, { useContext } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [loginText, setLoginText] = useState("Login");

  const {loggedInUser} = useContext(UserContext);
  // console.log(data);

  const onlineStatus = useOnlineStatus();

  // selector Hook ( subscribing to the store usig selector)
  const cartItems = useSelector((store) => store.cart.items);


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
              {onlineStatus ? "Online:🟢" : "Offline:🔴"}
            </li>
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
                <img src={cart} alt="" />({cartItems.length})
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
            <li className=" loggedIn">
              {loggedInUser }
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
