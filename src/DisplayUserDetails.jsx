import React from "react";
import "./DisplayUserDetails.css";

const DisplayUserDetails = ({ enteredDetails }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> User Details</h2>
      <table className="product-table" style={{ margin: "0 auto" }}>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>First-name</th>
            <th>Last-name</th>
            <th>Email</th>
            <th>Password</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {enteredDetails.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayUserDetails;
