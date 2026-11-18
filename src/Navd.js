
import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate } from 'react-router-dom';
import "./Mart.css";

function Navd() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [cartCount, setCartCount] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    return cart.reduce(
      (total, item) => total + (Number(item.quantity) || 0),
      0
    );
  });

  const navigate = useNavigate();

  useEffect(() => {
    function checkLogin() {
      setIsLoggedIn(
        localStorage.getItem("isLoggedIn") === "true"
      );
    }

    window.addEventListener("loginStatusChanged", checkLogin);

    return () => {
      window.removeEventListener("loginStatusChanged", checkLogin);
    };
  }, []);

  useEffect(() => {
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      setCartCount(
        cart.reduce(
          (total, item) => total + (Number(item.quantity) || 0),
          0
        )
      );
    }

    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");

    window.dispatchEvent(new Event("loginStatusChanged"));

    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <Navbar expand="lg" className="department-navbar">
      <Container>

        <Navbar.Brand as={Link} to="/" className="store-logo">
          <img
            src="/lgu.jpg"
            className="logo"
            alt="Ghar Store"
          />

          <span className="store-name">Ghar Store</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto department-links">

            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>

            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout}>
                Log-out
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Log-in
              </Nav.Link>
            )}

          </Nav>

          <Form
            className="search-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputGroup>

              <Form.Control
                type="text"
                placeholder="Search products..."
              />

              <Button variant="success" type="submit">
                Search
              </Button>

            </InputGroup>
          </Form>

          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            <span>Cart</span>

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </Link>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navd;