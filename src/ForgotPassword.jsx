import React, { useState } from "react";

function ForgotPassword({ enteredDetails }) {
  const [resetPassword, setResetPassword] = useState("");

  const handleReset = (e) => {
    setResetPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const findToReset = enteredDetails.find(
      (userToReset) => userToReset.email === resetPassword || userToReset.userName === resetPassword
    );

    if (findToReset) {
      // Perform actions to reset the password
      // Here, you would typically update the password for the found user
      // For demonstration purposes, let's assume we set a new password directly in the state
      const updatedDetails = enteredDetails.map(user => {
        if (user.email === findToReset.email) {
          return { ...user, password: "newPassword" };
        }
        return user;
      });
      setResetPassword("");
      console.log("Updated user details:", updatedDetails);
      alert("Password reset successful. Check your email for further instructions.");
    } else {
      alert("User not found. Please check your email or username.");
    }
  };

  return (
    <div style={{ marginTop: "5em", marginLeft: '1em', marginRight: '1em' }}>
      <form onSubmit={handleSubmit}>
        <p>
         Please enter your username or email address.
          You will receive a link to create a new password.
        </p>
        <input
          style={{
            marginTop: "3em",
            width: "300px",
            height: "40px",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="email / user Name"
          value={resetPassword}
          onChange={handleReset}
        />{" "}
        <br />
        <input
          type="submit"
          value="Reset Password"
          style={{
            marginTop: "2em",
            padding: "7px 15px",
            backgroundColor: "#0056b3",
            color: "white",
            cursor: "pointer",
            border: "none",
            borderRadius: "3px",
            width: 'auto'
          }}
        />
      </form>
    </div>
  );
}

export default ForgotPassword;
