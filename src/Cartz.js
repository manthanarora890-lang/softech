import "./ziva.css";

function Cartz({ cart = [], setCart }) {

  function removeItem(index) {
    const newCart = cart.filter(
      (_, itemIndex) => itemIndex !== index
    );

    setCart(newCart);
  }

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div className="z-cart-page">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (

        <div className="z-empty-cart">
          <h2>Your cart is empty 👜</h2>
          <p>Add some beautiful handbags to your cart.</p>
        </div>

      ) : (

        <>
          <div className="z-cart-items">

            {cart.map((product, index) => (

              <div
                className="z-cart-card"
                key={index}
              >

                <div className="z-cart-image">
                  👜
                </div>

                <div className="z-cart-details">

                  <h2>
                    {product.name}
                  </h2>

                  <p>
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                </div>

                <button
                  className="z-remove-button"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          <div className="z-cart-summary">

            <h2>
              Total: ₹{total.toLocaleString("en-IN")}
            </h2>

            <button className="z-checkout-button">
              Checkout
            </button>

          </div>
        </>

      )}

    </div>
  );
}

export default Cartz;