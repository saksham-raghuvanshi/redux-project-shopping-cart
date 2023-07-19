import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.cartState.cartList);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="shopping-cart" />
        <span>Redux Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {products.length}</span>
      </Link>
    </header>
  );
};

export default Header;
