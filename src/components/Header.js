import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import close_icon from "../images/icons/close_icon.svg";

const Header = ({ loggedIn, email, handleSignout }) => {
  const location = useLocation();
  const isLogin = location.pathname === "/signin";
  const isRegister = location.pathname === "/signup";

  return (
    <header className="header">
      <img src={logo} className="logo" alt="Around the U.S logo" />
      <nav className="header_nav">
        <ul
          className={`header__links ${
            isLogin || isRegister ? "header__links_signup-login-page" : ""
          }`}
        >
          {isLogin && (
            <li className="header__link-item">
              <Link to="/signup" className="header__link">
                Sign up
              </Link>
            </li>
          )}
          {isRegister && (
            <li className="header__link-item">
              <Link to="/signin" className="header__link">
                Log in
              </Link>
            </li>
          )}
          {loggedIn && (
            <li className="header__link-item">
              <Link
                to="/signin"
                className="header__link"
                onClick={handleSignout}
              >
                Log out
              </Link>
            </li>
          )}
          {loggedIn && <li className="header__link-item">{email}</li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
