/*
import React from 'react';
import Imageurl from './Photo';
import { useNavigate } from 'react-router-dom';

const CartContent = ({ cart, updateCart, updateCartCount }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId && product.count < product.availableProduct) {
        return {
          ...product,
          count: product.count + 1,
        };
      }
      return product;
    });

    updateCart(updatedCart);
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
  };

  const removeFromCart = (productId) => {
    const productToRemove = cart.find((product) => product.id === productId);

    const confirmDelete = window.confirm(`Are you sure you want to remove ${productToRemove.name} from the cart?`);

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
    return cart.reduce((total, product) => {
      return total + product.count * parseFloat(product.price);
    }, 0).toFixed(2);
  };

  const handleCheckpointClick = () => {
    const productIds = cart.map((product) => product.id);
    navigate('/CheckPointButton', { state: { productIds, cart } });
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      {cart.length === 0 ? (
        <div id="shopping-cart-list-empty" style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ marginTop: '15rem', fontSize: '2rem' }}>Your shopping cart is empty.</p>
        </div>
      ) : (
        <div id="shopping-cart-list">
          <h1 style={{ textAlign: 'center', marginTop: '2em' }}>Products In Cart</h1>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '3em' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}></th>
                <th style={tableHeaderStyle}>Product</th>
                <th style={tableHeaderStyle}>Price</th>
                <th style={tableHeaderStyle}>Quantity</th>
                <th style={tableHeaderStyle}>Total Amount (GH)</th>
                <th style={tableHeaderStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr
                  key={product.id}
                  style={{
                    borderBottom: index === cart.length - 1 ? 'none' : '1px solid #ccc',
                  }}
                >
                  <td style={tableCellStyle}>
                    <img
                      style={{ width: '5em', height: '5em', borderRadius: '15px', marginRight: '10px' }}
                      src={Imageurl(product)}
                      alt={product.id}
                    />
                  </td>
                  <td style={tableCellStyle}>{product.name}</td>
                  <td style={tableCellStyle}>{product.price}</td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ border: '1px solid #cfcbcb' }}>
                      <button onClick={() => reduceQuantity(product.id)} style={quantityButtonStyle}>-</button>
                      {product.count}
                      <button onClick={() => increaseQuantity(product.id)} style={quantityButtonStyle}>+</button>
                    </div>
                  </td>
                  <td style={tableCellStyle}>{(product.count * parseFloat(product.price)).toFixed(2)}</td>
                  <td style={tableCellStyle}>
                    <button onClick={() => removeFromCart(product.id)} style={actionButtonStyle}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ float: 'right' }}>Accumulated Total Amount: GH{calculateTotalAmount(cart)}</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => handleCheckpointClick()}>Checkpoint</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const tableCellStyle = {
  padding: '10px',
  textAlign: 'center',
};

const quantityButtonStyle = {
  marginRight: '5px',
  border: 'none',
  backgroundColor: 'white',
  cursor: 'pointer',
  padding: '10px 15px',
  color: '#333',
};

const actionButtonStyle = {
  color: 'red',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '20px',
};
*/
