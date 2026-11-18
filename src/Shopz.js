import { useState } from "react";
import ShopFilters from "./Shopfilter";
import Shopprod from "./Shopprod";
import Shophero from "./Shophero";
import Footz from "./Footz";
import Naviz from "./Naviz";

function Shopz() {

  // CART
  const [cart, setCart] = useState([]);

  // FILTERS
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    colors: [],
  });

  // CLEAR FILTERS
  function clearFilters() {
    setFilters({
      categories: [],
      prices: [],
      colors: [],
    });
  }

  return (
    <>
      {/* NAVBAR */}
      <Naviz cart={cart} />

      {/* HERO */}
      <Shophero />

      {/* SHOP */}
      <div className="z-shop-main">

        {/* FILTERS */}
        <ShopFilters
          filters={filters}
          setFilters={setFilters}
          clearFilters={clearFilters}
        />

        {/* PRODUCTS */}
        <Shopprod
          filters={filters}
          cart={cart}
          setCart={setCart}
        />

      </div>

      {/* FOOTER */}
      <Footz />
    </>
  );
}

export default Shopz;