import React from "react";
import { useLocation } from "react-router-dom";

const Sales = () => {
  const location = useLocation();
  const { CheckPointItem } = location.state || {};

  return (
    <div>
      <p style={headerStyle}>Sales Page Comming soon</p>
    </div>
  );
};

export default Sales;

const headerStyle = {
  textAlign: "center",
};
