import React, { useState } from "react";
import Imageurl from "./Photo";
import { useNavigate } from "react-router-dom";
import "./CartContent.css";

const CartContent = ({ cart, updateCart, updateCartCount }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (
        product.id === productId &&
        product.count < product.availableProduct
      ) {
        return {
          ...product,
          count: product.count + 1,
        };
      }
      return product;
    });

    updateCart(updatedCart);
    updateCartCount(calculateTotalCount(updatedCart));
  };

  const reduceQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId && product.count > 1) {
        return {
          ...product,
          count: product.count - 1,
        };
      }
      return product;
    });

    updateCart(updatedCart);
    updateCartCount(calculateTotalCount(updatedCart));
  };

  const removeFromCart = (productId) => {
    const productToRemove = cart.find((product) => product.id === productId);

    const confirmDelete = window.confirm(
      `Are you sure you want to remove ${productToRemove.name} from the cart?`
    );

    if (confirmDelete) {
      const updatedCart = cart.filter((product) => product.id !== productId);
      updateCart(updatedCart);
      updateCartCount(calculateTotalCount(updatedCart));
    }
  };

  const calculateTotalCount = (cart) => {
    return cart.reduce((count, product) => count + product.count, 0);
  };

  const calculateTotalAmount = (cart) => {
    return cart
      .reduce((total, product) => {
        return total + product.count * parseFloat(product.price);
      }, 0)
      .toFixed(2);
  };

  const handleCheckpointClick = () => {
    const productIds = cart.map((product) => product.id);
    navigate("/E-commerce-react/CheckPointButton", { state: { productIds, cart } });
  };

  return (
    <div className="shopping-cart-page">
      {cart.length === 0 ? (
        <div id="shopping-cart-list-empty">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
            alt=""
            width="400px"
            height="400px"
          />{" "}
          <br />
          <strong className="empty-cart-text">Cart is empty</strong>
        </div>
      ) : (
        <div className="shopping-cart-page-margin-top">
          <div id="shopping-cart-list">
            <div className="sub-shopping-cart-page">
              <table>
                <thead>
                  <tr>
                    <th className="tableHeaderStyle"></th>
                    <th className="tableHeaderStyle">Product</th>
                    <th className="tableHeaderStyle">Price &cent;</th>
                    <th className="tableHeaderStyle">Quantity</th>
                    <th className="tableHeaderStyle">Subtotal</th>
                    <th className="tableHeaderStyle">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <tr
                      key={product.id}
                      style={{
                        borderBottom:
                          index === cart.length - 1 ? "none" : "1px solid #ccc",
                      }}
                    >
                      <td className="table-sell-style">
                        <img src={Imageurl(product)} alt={product.id} />
                      </td>
                      <td className="table-sell-style">{product.name}</td>
                      <td className="table-sell-style">{product.price}</td>
                      <td style={{ textAlign: "center" }}>
                        <div className="cart-border">
                          <button
                            onClick={() => reduceQuantity(product.id)}
                            className="quantity-button-decrease"
                          >
                            -
                          </button>
                          {product.count}
                          <button
                            onClick={() => increaseQuantity(product.id)}
                            className="quantity-button-increase"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="table-sell-style">
                        {(product.count * parseFloat(product.price)).toFixed(2)}
                      </td>
                      <td className="table-sell-style">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="action-button-style"
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="check-point-proceed">
              <div className="sub-check-point">
                <h3>Cart Totals</h3> <br />
                <p
                  className=""
                  style={{
                    borderBottom: "1px solid black",
                    marginTop: "3em",
                  }}
                >
                  Total{" "}
                  <span style={{ float: "right" }}>
                    &cent;{calculateTotalAmount(cart)}
                  </span>{" "}
                </p>
                <div
                  className="proceed-to-checkpoint-button"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    style={{
                      fontWeight: "bolder",
                      width: "100%",
                      marginTop: "5em",
                      padding: "15px 10px",
                      borderRadius: "20px",
                      border: "none",
                      backgroundColor: "rgb(89, 172, 89)",
                      cursor: "pointer",
                    }}
                    onClick={() => handleCheckpointClick()}
                  >
                    Proceed To Checkpoint
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
