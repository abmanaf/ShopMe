import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

import "./CheckPointButton.css"; 

const CheckPointButton = ({ updateCartCount, setCart }) => {
  const [fullName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [contomerDetails, setCustomerDetails] = useState([]);
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
    //const productIds = cart.map((product) => product.id);
    // navigate("/Sales", { state: { productIds, cart } });
    if(fullName && email && address && telephone){
      alert("message sent");
    }
    else{
      alert('Please fill in all the required fields.');
      return; 
    }
    updateCartCount(0);
    setCart([]); 
    setOrderPlaced(true); // Set order placed status to true
    productIds([])
  };

  return (
    <div className="checkout-container">
      {orderPlaced ? (
        <div className="order-placed">
          <h2>Order Placed Successfully</h2>
          <p>Thank you for your order!</p>
        </div>
      ) : (
        <div className="checkout-content">
            <div className="checkout-form">
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" id="fullName" value={fullName} onChange={(e) => setFirstName(e.target.value)} required />              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />              </div>
              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="text" id="phone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />              </div>
              
            </form>
          </div>
          <div className="checkout-products">
            {productIds && (
              <table className="check-point-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Sub Total(GH)</th>
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
                    <td colSpan="3">Amount to be paid: {calculateTotalAmount().toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
              
            )}
            <button onClick={handleSubmitOrder} className="place-order-btn">
                Place Order
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckPointButton;
