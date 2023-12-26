import React, { useState } from "react";

function ForgotPassword({ enteredDetails, userName }) {
  const [resetPassword, setResetPassword] = useState("");

  const handleReset = (e) => {
    setResetPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const findToReset = enteredDetails.find(
      (userToReset) => userToReset.userName === userName
    );

    if (findToReset) {
      // Perform actions to reset the password
    }
  };

  return (
    <div style={{ margin: "2em" }}>
      <form onSubmit={handleSubmit}>
        <p>
          Forgotten your password? Please enter your username or email address.
          You will receive a link to create a new password via email.
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
          onChange={handleReset}
        />{" "}
        <br />
        <input
          style={{
            marginTop: "2em",
            padding: "7px 15px",
            backgroundColor: "#0056b3",
            color: "white",
            cursor: "pointer",
            border: "none",
            borderRadius: "3px",
          }}
          type="reset"
          name="reset"
          id=""
        />
      </form>
    </div>
  );
}

export default ForgotPassword;
