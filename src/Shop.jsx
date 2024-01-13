import React, { useState } from "react";
import Imageurl from "./Photo";
import { initialProducts } from "./Database";
import "./Shop.css";

const Shop = ({ cart, setCart, updateCartCount }) => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = initialProducts.filter((product) => {
    if (selectedCategory === "all") {
      return true;
    } else {
      return product.category === selectedCategory;
    }
  });


  const addToCart = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        if (product.availableProduct > 0) {
          const productInCart = cart.find((item) => item.id === productId);
          if (!productInCart) {
            return {
              ...product,
              count: Number(product.count) + 1,
            };
          } else {
            alert(
              `${product.name} is already in the cart, visit the cart to increase the product quantity`
            );
          }
        } else {
          alert(`${product.name} is out of stock`);
        }
      }
      return product;
    });

    setProducts(updatedProducts);

    const totalCount = calculateTotalCount(updatedProducts);
    updateCartCount(totalCount);

    const updatedCart = updatedProducts.filter((product) => product.count > 0);
    setCart(updatedCart);
  };

  const calculateTotalCount = (cart) => {
    return cart.reduce((count, product) => count + product.count, 0);
  };

  const productList = filteredProducts.map((product, index) => (
    <div className="product-container" key={product.id}>
      <li>
        <div className="sub-product-container">
          <img src={Imageurl(product)} alt={product.id} />
          <br />
          {product.name} <br /> <br />
          <del style={{ color: "red" }}>
            {product.previousPrice ? `₵${product.previousPrice}` : ""}
          </del>{" "}
          &cent;{product.price}
          <br />
          {/* 
          {product.availableProduct ? product.availableProduct: 'product is out of stock'}
          <br />
          */}
          <br />
          
          <div className="addToCart">
            <button onClick={() => addToCart(product.id)}>Add To Cart</button>
          </div>
        </div>
      </li>
    </div>
  ));
{/*
  const healthyFruits = initialProducts
    .filter((item) => item.category === "fruits")
    .map((item) => (
      <div className="fruit-container" key={item.id}>
        <li>
          <div className="sub-fruit-container">
            <img src={Imageurl(item)} alt={item.id} />
            <br />
            {item.name} <br /> <br />
            <del style={{ color: "red" }}>
              {item.previousPrice ? `₵${item.previousPrice}` : ""}
            </del>{" "}
            &cent;{item.price}
            <br />
            <br />
            <div className="addToCart">
              <button onClick={() => addToCart(item.id)}>Add To Cart</button>
            </div>
          </div>
        </li>
      </div>
    ));
 */}
  return (
    <div>
        <div style={{backgroundColor: 'white', padding: '3em 3em'}}>
          <p style={{textAlign: 'center', fontSize: '2em',padding: '1em'}}>Category</p>
          <div className="category-container" >
          <div className="filter-button" code="categoryFilter">
  <button
    style={{ borderRadius: '10px' }}
    value="all"
    className={selectedCategory === 'all' ? 'active' : ''}
    onClick={() => setSelectedCategory('all')}
  >
    <i style={{ fontSize: '30px ', padding: '10px 20px', color: 'white' }} className="fa fa-globe" aria-hidden="true"></i> <br />All
  </button>
  <button
    style={{ borderRadius: '10px' }}
    value="fruits"
    className={selectedCategory === 'fruits' ? 'active' : ''}
    onClick={() => setSelectedCategory('fruits')}
  >
    <i style={{ fontSize: '30px ', padding: '10px 20px', color: 'white' }} className="fa fa-globe" aria-hidden="true"></i> <br />Fruits
  </button>
  <button
    style={{ borderRadius: '10px' }}
    value="vegetables"
    className={selectedCategory === 'vegetables' ? 'active' : ''}
    onClick={() => setSelectedCategory('vegetables')}
  >
    <i style={{ fontSize: '30px ', padding: '10px 20px', color: 'white' }} className="fa fa-cutlery" aria-hidden="true"></i><br />Vegetables
  </button>
</div>

          </div>
          </div>
      <div className="available-product-container">
        <div style={{ marginTop: "4em", textAlign: "center" }}>
        {/* 
          <div className="sort-container" style={{ marginTop: "2em" }}>
            <label
              htmlFor="categoryFilter"
              style={{ fontSize: "1em", marginTop: "em" }}
            >
              Select Category:
            </label>
            <select
              style={{
                fontSize: "1em",
                marginBottom: "2em",
                padding: "0.3em 0.3em",
              }}
              code="categoryFilter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
            </select>
          </div>
          */}
          <div className="product-in-container">{productList}</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
