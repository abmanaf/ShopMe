import React, { useState, useEffect  } from "react";
import Navbar from "./NavBar";
import { SiteDescription } from "./SiteDescription";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import CartContent from "./CartContent";

import { Route, Routes, useNavigate  } from "react-router-dom";
import FinalFooter from "./FinalFooter";
import { WhatsAppIcon } from "./WhatsAppIcon";
import CheckPointButton from "./CheckPointButton";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Data from "./Data";
import ForgotPassword from "./ForgotPassword";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [enteredDetails, setEnteredDetails] = useState([]);
  //const navigate = useNavigate(); // Get the navigate function


  const updateCartCount = (count) => {
    setCartCount(count);
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };
    console.log("updateCartCount in App:", updateCartCount); // Debugging


  return (
    <div>
      <Navbar cartCount={cartCount} cart={cart} />
      <Routes>
        <Route path="/E-commerce-react" element={<Home cart={cart} setCart={setCart} updateCartCount={updateCartCount} />
}  />
        <Route
          path="/E-commerce-react/Shop"
          element={
            <Shop
              updateCartCount={updateCartCount}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/E-commerce-react/About" element={<About />} />
        <Route path="/E-commerce-react/Contact" element={<Contact />} />
        <Route
          path="/E-commerce-react/CartContent"
          element={
            <CartContent
              cart={cart}
              updateCart={updateCart}
              updateCartCount={updateCartCount}
            />
          }
        />
        <Route path="/E-commerce-react/CheckPointButton" element={<CheckPointButton cart={cart} setCart={setCart} updateCartCount={updateCartCount}/>} />
        <Route
          path="/E-commerce-react/SignupPage"
          element={<SignupPage updateEnteredDetails={setEnteredDetails} />}
        />
        <Route
          path="/E-commerce-react/LoginPage"
          element={<LoginPage enteredDetails={enteredDetails} />}
        />
        <Route
          path="/E-commerce-react/Data"
          element={<Data enteredDetails={enteredDetails} />}
        />
        <Route
          path="/E-commerce-react/ForgotPassword"
          element={<ForgotPassword enteredDetails={enteredDetails} />}
        />
      </Routes>
      <WhatsAppIcon />
      <FinalFooter />
    </div>
  );
}
