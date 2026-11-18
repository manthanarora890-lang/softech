import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Mart.css";

function Deponav() {
  const [cartCount, setCartCount] = useState(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("gharCart") || "[]");
      return cart.reduce(
        (total, item) => total + (Number(item.count) || 1),
        0
      );
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    function updateCartCount() {
      try {
        const cart = JSON.parse(localStorage.getItem("gharCart") || "[]");
        setCartCount(
          cart.reduce(
            (total, item) => total + (Number(item.count) || 1),
            0
          )
        );
      } catch {
        setCartCount(0);
      }
    }

    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <div className="department-nav">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/shop?category=fruits">
        Fruits & Vegetables
      </NavLink>

      <NavLink to="/shop?category=dairy">
        Dairy & Eggs
      </NavLink>

      <NavLink to="/shop?category=snacks">
        Snacks & Biscuits
      </NavLink>

      <NavLink to="/shop?category=beverages">
        Beverages
      </NavLink>

      <NavLink to="/shop?category=instant">
        Instant Food
      </NavLink>

      <NavLink to="/shop?category=pet">
        Pet Care
      </NavLink>

      <NavLink to="/shop?category=cleaning">
        Home & Cleaning
      </NavLink>

      <NavLink to="/shop?category=personal">
        Personal Care
      </NavLink>

      <NavLink to="/cart" className="deponav-cart">
        🛒 Cart
        <span className="cart-count">{cartCount}</span>
      </NavLink>
    </div>
  );
}

export default Deponav;

