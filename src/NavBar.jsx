import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import UserProfile from "./UserProfile";
import CartIcon from "./CartIcon";

export default function Navbar({ cartCount }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`side-bar ${isSideBarOpen ? "open" : "closed"}`}>
        <div className="close-icon" onClick={closeSideBar}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <CustomLink
          className="side-bar-context"
          to="/Home"
          closeSideBar={closeSideBar}
        >
          Home
        </CustomLink>
        <CustomLink
          className="side-bar-context"
          to="/Shop"
          closeSideBar={closeSideBar}
        >
          Shop
        </CustomLink>
        <CustomLink
          className="side-bar-context"
          to="/About"
          closeSideBar={closeSideBar}
        >
          About
        </CustomLink>
        <CustomLink
          className="side-bar-context"
          to="/Contact"
          closeSideBar={closeSideBar}
        >
          Contact
        </CustomLink>
        <CustomLink
          className="side-bar-context"
          to="/LoginPage"
          closeSideBar={closeSideBar}
        >
          Login
        </CustomLink>
      </div>
      <div className="navbar-left">
        <Link to="#" className="site-name">
          AlibabsShop
        </Link>
      </div>
      <div className="navbar-middle">
        <CustomLink className="" to="/Home" closeSideBar={closeSideBar}>
          Home
        </CustomLink>
        <CustomLink to="/Shop">Shop</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Sales">Contact</CustomLink>
      </div>

      <div className="navbar-right">
        <div className="login-icon">
          <UserProfile to="/LoginPage" />
        </div>
        <div className="icon-float">
          <div>
            <CartIcon cartCount={cartCount} />
          </div>
          <div className="menu-icon" onClick={openSideBar}>
            <Link to="#">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, closeSideBar, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const handleClick = () => {
    closeSideBar();
  };

  return (
    <div
      className={`nav-link ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
