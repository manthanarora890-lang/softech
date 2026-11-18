import React from "react";
import "./Mart.css";

function Footd() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Store Info */}
        <div className="footer-column footer-about">
          <h2>Our Store</h2>

          <p>
            Your everyday store for groceries, household essentials,
            personal care and more.
          </p>
        </div>


        {/* Shop */}
        <div className="footer-column">
          <h3>Shop</h3>

          <a href="/shop">Groceries</a>
          <a href="/shop">Household</a>
          <a href="/shop">Personal Care</a>
          <a href="/shop">Snacks & Beverages</a>
          <a href="/shop">Offers</a>
        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about-us">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/faq">FAQs</a>
        </div>


        {/* Customer Support */}
        <div className="footer-column">
          <h3>Customer Support</h3>

          <a href="/contact">Contact Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>

      </div>


      {/* Contact Information */}
      <div className="footer-contact">

        <span>📍 Your Location</span>
        <span>📞 Contact Us</span>
        <span>✉ Email Us</span>

      </div>


      {/* Social Media */}
      <div className="footer-social">

        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">YouTube</a>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

        <p>© 2026 Our Store. All Rights Reserved.</p>

      </div>

    </footer>
  );
}

export default Footd;

