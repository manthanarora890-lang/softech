import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Deponav from "./Deponav";
import "./Mart.css";

function Cartd() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("gharCart") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    function syncCart() {
      try {
        setCart(JSON.parse(localStorage.getItem("gharCart") || "[]"));
      } catch {
        setCart([]);
      }
    }

    window.addEventListener("cartUpdated", syncCart);
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener("cartUpdated", syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  function updateCart(updatedCart) {
    localStorage.setItem("gharCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  }

  function increaseQuantity(index) {
    const updatedCart = cart.map((item, i) =>
      i === index
        ? { ...item, count: (Number(item.count) || 1) + 1 }
        : item
    );

    updateCart(updatedCart);
  }

  function decreaseQuantity(index) {
    const item = cart[index];

    if ((Number(item.count) || 1) <= 1) {
      removeItem(index);
      return;
    }

    const updatedCart = cart.map((product, i) =>
      i === index
        ? { ...product, count: product.count - 1 }
        : product
    );

    updateCart(updatedCart);
  }

  function removeItem(index) {
    updateCart(cart.filter((_, i) => i !== index));
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price || 0) * (Number(item.count) || 1),
    0
  );

  return (
    <>
      <Deponav />

      <Container className="my-5">
        <h2 className="mb-4">My Shopping Cart 🛒</h2>

        {cart.length === 0 ? (
          <div className="text-center py-5">
            <h4>Your cart is empty!</h4>
            <p>Add products from our shop to see them here.</p>

            <Button as={Link} to="/home" variant="success">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${item.quantity}-${index}`}
                className="d-flex align-items-center justify-content-between flex-wrap gap-3 border rounded p-3 mb-3"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover"
                    }}
                  />

                  <div>
                    <h5>{item.name}</h5>
                    <p>Pack size: {item.quantity}</p>
                    <p>Price: ₹{item.price}</p>
                    <strong>
                      Subtotal: ₹
                      {Number(item.price || 0) *
                        (Number(item.count) || 1)}
                    </strong>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <Button
                    variant="outline-success"
                    onClick={() => decreaseQuantity(index)}
                  >
                    −
                  </Button>

                  <span>{Number(item.count) || 1}</span>

                  <Button
                    variant="outline-success"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}

            <div className="text-end mt-4">
              <h3>Total: ₹{total}</h3>

              <Button
                variant="success"
                onClick={() => alert("Checkout feature coming soon!")}
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default Cartd;
