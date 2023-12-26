import React from "react";
import { Link } from "react-router-dom";

const CartIcon = ({ cartCount }) => {
  return (
    <div>
      <Link to="/CartContent" className="cart-icon" style={{ marginRight: "" }}>
        <i className="fa fa-shopping-cart"></i>
        <span className="cart-badge">{cartCount}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
