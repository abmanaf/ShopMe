import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const { CheckPointItem } = location.state || {};

  return (
    <div>
      <p style={headerStyle}>Contact Page Comming soon</p>
    </div>
  );
};

export default Contact;

const headerStyle = {
  textAlign: "center",
};
