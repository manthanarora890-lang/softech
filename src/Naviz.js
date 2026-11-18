import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./ziva.css";

function Naviz({ cart }) {

  return (
    <Navbar expand="lg" className="zivara-navbar">

      <Container className="navbar-container">

        {/* LOGO */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="brand-name"
        >
          ZIVARA
        </Navbar.Brand>

        {/* MOBILE MENU BUTTON */}
        <Navbar.Toggle aria-controls="zivara-navbar-nav" />

        <Navbar.Collapse id="zivara-navbar-nav">

          {/* NAVIGATION LINKS */}
          <Nav className="nav-links">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>

            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>

          </Nav>

          {/* RIGHT SIDE ICONS */}
          <div className="nav-icons">

            {/* WISHLIST */}
            <Link
              to="/wishlist"
              className="nav-icon"
              aria-label="Wishlist"
            >

              <svg viewBox="0 0 24 24">

                <path d="M20.8 8.8c0 5.2-8.8 11-8.8 11S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />

              </svg>

            </Link>

            {/* CART */}
            <Link
              to="/cart"
              className="nav-icon cart-icon"
              aria-label="Cart"
            >

              <svg viewBox="0 0 24 24">

                <path d="M5 8h14l1 13H4L5 8Z" />

                <path d="M9 8V6a3 3 0 0 1 6 0v2" />

              </svg>

              {/* CART COUNT */}
              <span className="cart-count">
                {cart.length}
              </span>

            </Link>

          </div>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default Naviz;