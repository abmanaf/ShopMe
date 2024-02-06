import React from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div>
      <Link
        to="/E-commerce-react/LoginPage"
        className="Hey"
        style={{ fontSize: "19px", marginRight: "0.5rem" }}
      >
        <i className="fa fa-user-circle" aria-hidden="true"></i>
      </Link>
    </div>
  );
}

export default UserProfile;
