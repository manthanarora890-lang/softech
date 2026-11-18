import React from "react";
import "./Mart.css";
import Navd from "./Navd";
import Footd from "./Footd";

function Aboutd() {
  return (
    <>
    <Navd />
    <section className="about-section">

      <h5>ABOUT US</h5>

      <h2>Your Everyday Store, Made Simple</h2>

      <p className="about-text">
        We bring everyday essentials together in one convenient place.
        personal care and household essentials, you can find what you
        From fresh groceries and dairy products to snacks, beverages,
        need for your daily life.
      </p>

      <div className="about-boxes">

        <div className="about-box">
          <h3>✓ Quality Products</h3>
          <p>
            Carefully selected products for your everyday needs.
          </p>
        </div>

        <div className="about-box">
          <h3>✓ Affordable Prices</h3>
          <p>
            Great products at prices that fit your budget.
          </p>
        </div>

        <div className="about-box">
          <h3>✓ Easy Shopping</h3>
          <p>
            A simple and convenient shopping experience.
          </p>
        </div>

        <div className="about-box">
          <h3>✓ Everything in One Place</h3>
          <p>
            From groceries to household essentials, we've got you covered.
          </p>
        </div>

      </div>

    </section>
    <Footd />
    </>
  );
}

export default Aboutd;