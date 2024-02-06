import React from "react";
import "./FinalFooter.css";
import { Link } from "react-router-dom";

function FinalFooter() {
  return (
    <div>
      <footer className="footer">
        <p style={{ fontSize: "12px", color: "white", textAlign: 'center', justifyContent: 'center' }}>
          &copy; 2024 AlibabsShop. All rights reserved.
        </p>

        <div className="footer-social">
          <Link to="https://web.facebook.com/?_rdc=1&_rdr">
            <i
              style={{ color: "white", padding: "15px 15px" }}
              className="fa fa-facebook"
            ></i>
          </Link>
          <Link to="https://twitter.com/home">
            <i
              style={{ color: "white", padding: "15px 15px" }}
              className="fa fa-twitter"
            ></i>
          </Link>
          <Link to="#">
            <i
              style={{ color: "white", padding: "15px 15px" }}
              className="fa fa-instagram"
            ></i>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default FinalFooter;
