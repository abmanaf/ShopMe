import React from "react";
import "./FinalFooter.css";

function FinalFooter() {
  return (
    <div>
      <footer className="footer">
        <p style={{ fontSize: "12px", color: "white", marginTop: "10px" }}>
          &copy; 2023 AlibabsShop. All rights reserved.
        </p>

        <div className="footer-social">
          <a href="#">
            <i
              style={{ color: "white", padding: "15px 15px" }}
              className="fa fa-facebook"
            ></i>
          </a>
          <a href="#">
            <i
              style={{ color: "white", padding: "15px 15px" }}
              className="fa fa-twitter"
            ></i>
          </a>
          <a href="#">
            <i
              style={{ color: "white", padding: "15px 15px" }}
              className="fa fa-instagram"
            ></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default FinalFooter;
