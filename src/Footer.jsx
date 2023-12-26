import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={infoStyle}>
          <h3>Reach Me</h3>
          <p>Email: abdulmanafaliu414@email.com</p>
          {/* Address: Nii Sowah Street, Adenta, Ghana */}
        </div>
        <div style={infoStyle}>
          <h3 style={{ marginLeft: "16rem", color: "#777" }}>Follow Us</h3>
          <ul style={listStyle}>
            <div
              style={{ display: "flex", marginLeft: "16rem", gap: "0.6rem" }}
            >
              <li style={{ marginLeft: "7rem" }}>
                <Link
                  to="https://web.facebook.com/?_rdc=1&_rdr"
                  style={{ color: "white" }}
                >
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/home" style={{ color: "white" }}>
                  <i
                    className="fa fa-twitter"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="#" style={{ color: "white" }}>
                  <i
                    className="fa fa-instagram"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  ></i>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div style={copyRightStyle}>
        &copy; {new Date().getFullYear()} Your AlibabsShop. All rights reserved.
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#777",
  color: "#fff",
  padding: "20px 0",
  borderTop: "2px solid #ddd",
  bottom: "0",
  left: "0",
  width: "100%",
  position: "", // Fixed position to keep it at the bottom
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
};

const infoStyle = {
  flex: "1",
  padding: "0 20px",
};

const listStyle = {
  listStyle: "none",
  padding: "1px",
};

const copyRightStyle = {
  padding: "10px 0",
  textAlign: "center",
};

export default Footer;
