import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CheckPointButton.css"; // Import the CSS file

const CheckPointButton = () => {
  const location = useLocation();
  const { productIds, cart } = location.state || {};
  const navigate = useNavigate(); // Initialize the navigate function

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
    const productIds = cart.map((product) => product.id);
    navigate("/Sales", { state: { productIds, cart } });
  };

  return (
    <div>
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
              onClick={() => handleSubmitOrder()}
              style={{ cursor: "pointer", float: "right", padding: "0.5em" }}
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <p>No products selected.</p>
      )}
    </div>
  );
};

export default CheckPointButton;
