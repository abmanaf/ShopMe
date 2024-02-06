import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import "./CheckPointButton.css"; 

const CheckPointButton = ({ updateCartCount, setCart }) => {
  const location = useLocation();
  const { productIds, cart } = location.state || {};
  const navigate = useNavigate(); 
  const [orderPlaced, setOrderPlaced] = useState(false);

  const calculateTotalAmount = () => {
    if (!cart) return 0;
    return productIds.reduce((total, productId) => {
      const product = cart.find((item) => item.id === productId);
      if (product) {
        return total + product.count * parseFloat(product.price);
      }
      return total;
    }, 0);
  };       

  const handleSubmitOrder = () => {
    // Get the product IDs from the cart
    //const productIds = cart.map((product) => product.id);
    // navigate("/Sales", { state: { productIds, cart } });


    updateCartCount(0);
    setCart([]); // Reset cart to an empty array
    setOrderPlaced(true); // Set order placed status to true
  };



  return (
    <div>
      {orderPlaced ? (
        <div>
          <h2 style={{ textAlign: "center", marginTop: "4em" }}>Order Placed Successfully</h2>
          <p style={{ textAlign: "center" }}>Thank you for your order!</p>
        </div>
      ) : (
        <>
          <h2 style={{ textAlign: "center", marginTop: "4em" }}>
            Selected Products
          </h2>
          {productIds ? (
            <div>
              <table className="check-point-table" style={{ margin: "0 auto" }}>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Total Amount (GH)</th>
                  </tr>
                </thead>
                <tbody>
                  {productIds.map((productId) => {
                    const product = cart
                      ? cart.find((item) => item.id === productId)
                      : null;
                    return (
                      <tr key={productId}>
                        <td>{product ? product.name : "Product not found"}</td>
                        <td>{product ? product.count : "N/A"}</td>
                        <td>
                          {product
                            ? (product.count * parseFloat(product.price)).toFixed(2)
                            : "N/A"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Amount to be paid: {calculateTotalAmount().toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
              <div style={{ width: "50%", padding: "3rem" }}>
                <button
                  onClick={handleSubmitOrder}
                  style={{ cursor: "pointer", float: "right", padding: "0.5em" }}
                >
                  Place Order
                </button>
              </div>
            </div>
          ) : (
            <p>No products selected.</p>
          )}
        </>
      )}
    </div>
  );
};

export default CheckPointButton;
