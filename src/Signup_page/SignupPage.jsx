import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignupPage({ updateEnteredDetails }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userName = firstName.toLowerCase() + lastName.toLowerCase();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitForms = (e) => {
    e.preventDefault();

    if (
      password.length >= 5 &&
      password !== email &&
      password !== firstName + lastName
    ) {
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        userName: userName,
        id: Date.now(),
      };
      updateEnteredDetails((prevDetails) => [...prevDetails, newUser]);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      navigate("/E-commerce-react/Data");
    } else {
      alert("Please check password rules before");
    }
  };

  return (
    <div className="signup-pic-and-forms">
      <div className="signup-emoji"></div>
      <div className="form-container" style={{ marginTop: "8em" }}>
        <h2 style={{ textAlign: "center" }}>Create Account</h2>
        <form onSubmit={handleSubmitForms}>
          <input
            type="text"
            name="first_name"
            className="form-input"
            placeholder="First name"
            onChange={handleFirstName}
            required
          />
          <input
            type="text"
            name="last_name"
            className="form-input"
            placeholder="Last name"
            onChange={handleLastName}
            required
          />

          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
            onChange={handleEmail}
            required
          />

          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
            onChange={handlePassword}
            required
          />
          <p style={{ fontSize: "14px", color: "#777777" }}>
            Your password must:
          </p>
          <ul style={{ fontSize: "14px", color: "#777777" }}>
            <li>Be at least 6 characters long</li>
            <li>Not be the same as your name or email</li>
          </ul>
          <br />
          <button type="submit" className="form-button">
            Create new account
          </button>
          <p className="form-footer" style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link to="/E-commerce-react/LoginPage" style={{ color: "#007bff" }}>
              Login
            </Link>
          </p>
        </form>
      </div>
      {/* 
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
    */}
    </div>
  );
}

export default SignupPage;
