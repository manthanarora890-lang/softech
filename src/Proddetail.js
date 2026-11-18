import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Deponav from "./Deponav";
import "./Mart.css";

function Proddetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const [quantity, setQuantity] = useState(
    product?.options?.[0]?.quantity || ""
  );

  if (!product) {
    return (
      <>
        <Deponav />

        <div className="text-center py-5">
          <h3>Product details not found</h3>

          <Button
            variant="success"
            onClick={() => navigate("/shop")}
          >
            Back to Shop
          </Button>
        </div>
      </>
    );
  }

  const selectedOption = product.options.find(
    (option) => option.quantity === quantity
  );

  function handleAddToCart() {
    const option = product.options.find(
      (item) => item.quantity === quantity
    );

    if (!option) return;

    let cart = [];

    try {
      cart = JSON.parse(localStorage.getItem("gharCart") || "[]");
    } catch {
      cart = [];
    }

    const existing = cart.find(
      (item) =>
        item.id === product.id &&
        item.quantity === quantity
    );

    if (existing) {
      cart = cart.map((item) =>
        item.id === product.id &&
        item.quantity === quantity
          ? {
              ...item,
              count: (Number(item.count) || 1) + 1
            }
          : item
      );
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        quantity,
        price: option.price,
        count: 1
      });
    }

    localStorage.setItem("gharCart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    alert(product.name + " added to cart!");
  }

  return (
    <>
      <Deponav />

      <div className="product-details-page">
        <Button
          variant="outline-success"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          ← Back to Shop
        </Button>

        <div className="product-details-card">
          <div className="product-details-image">
            <img
              src={`/${product.image}`}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.innerHTML =
                  '<p class="image-not-found">Product image not found. Please check the image filename in the public folder.</p>';
              }}
            />
          </div>

          <div className="product-details-info">
            <p className="product-details-label">
              GHAR STORE
            </p>

            <h1>{product.name}</h1>

            <h2 className="product-details-price">
              ₹{selectedOption?.price}
            </h2>

            <p className="product-details-description">
              Fresh and quality products for your everyday needs.
              Choose your preferred quantity before adding to your cart.
            </p>

            <Form.Label>Choose Quantity</Form.Label>

            <Form.Select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mb-3"
            >
              {product.options.map((option) => (
                <option
                  key={option.quantity}
                  value={option.quantity}
                >
                  {option.quantity} - ₹{option.price}
                </option>
              ))}
            </Form.Select>

            <Button
              variant="success"
              className="w-100 product-details-button"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </Button>

            <p className="product-details-note">
              ✓ Quality products for everyday shopping
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proddetail;
