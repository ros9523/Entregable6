import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <h1 className="header_logo">e-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              to="/Login"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className='header__item__cart bx bx-user'></i>
            </NavLink>
          </li>

          <li className="header__item">
            <NavLink
              to="/Purchase"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className='header__item__cart bx bx-box' ></i>
            </NavLink>
          </li>

          <li className="header__item header__item--cart ">
          <NavLink
              to="/cart"
            >
             <i className='header__item__cart bx bx-cart'></i>
            </NavLink>
          
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
