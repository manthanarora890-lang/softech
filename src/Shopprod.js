import { useState } from "react";
import "./ziva.css";

function ShopProd({ filters, cart, setCart }) {

  // PRODUCTS
  const products = [

    {
      name: "Classic Tote Bag",
      price: 1999,
      reviews: 12,
      category: "Tote Bags",
      color: "Brown",
    },

    {
      name: "Elegant Shoulder Bag",
      price: 2499,
      reviews: 18,
      category: "Shoulder Bags",
      color: "Mauve",
    },

    {
      name: "Mini Handbag",
      price: 1599,
      reviews: 10,
      category: "Handbags",
      color: "Pink",
    },

    {
      name: "Crossbody Bag",
      price: 2199,
      reviews: 14,
      category: "Crossbody Bags",
      color: "Black",
    },

    {
      name: "Work Tote",
      price: 2799,
      reviews: 9,
      category: "Tote Bags",
      color: "Cream",
    },

    {
      name: "Quilted Shoulder Bag",
      price: 2299,
      reviews: 11,
      category: "Shoulder Bags",
      color: "Green",
    },

    {
      name: "Evening Clutch",
      price: 1899,
      reviews: 7,
      category: "Clutches",
      color: "Mauve",
    },

    {
      name: "Sling Bag",
      price: 1699,
      reviews: 8,
      category: "Crossbody Bags",
      color: "Brown",
    },

  ];

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  // SEARCH
  const [search, setSearch] = useState("");

  // SORT
  const [sort, setSort] = useState("popular");

  const productsPerPage = 4;

  // =========================
  // ADD TO CART
  // =========================

  function addToCart(product) {

    setCart((previousCart) => {

      const newCart = [
        ...previousCart,
        product
      ];

      return newCart;

    });

    
  }

  // =========================
  // FILTER
  // =========================

  let filteredProducts = products.filter(
    (product) => {

      // CATEGORY
      const categoryMatch =
        !filters ||
        filters.categories.length === 0 ||
        filters.categories.includes(
          product.category
        );

      // COLOR
      const colorMatch =
        !filters ||
        filters.colors.length === 0 ||
        filters.colors.includes(
          product.color
        );

      // PRICE
      const priceMatch =
        !filters ||
        filters.prices.length === 0 ||
        filters.prices.some(
          (range) => {

            if (
              range === "under2000"
            ) {
              return product.price < 2000;
            }

            if (
              range === "2000to2500"
            ) {
              return (
                product.price >= 2000 &&
                product.price <= 2500
              );
            }

            if (
              range === "2500to3000"
            ) {
              return (
                product.price > 2500 &&
                product.price <= 3000
              );
            }

            if (
              range === "above3000"
            ) {
              return product.price > 3000;
            }

            return false;

          }
        );

      return (
        categoryMatch &&
        colorMatch &&
        priceMatch
      );

    }
  );

  // =========================
  // SEARCH
  // =========================

  filteredProducts =
    filteredProducts.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  // =========================
  // SORT
  // =========================

  if (sort === "low") {

    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );

  }

  if (sort === "high") {

    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );

  }

  if (sort === "popular") {

    filteredProducts.sort(
      (a, b) =>
        b.reviews - a.reviews
    );

  }

  // =========================
  // PAGINATION
  // =========================

  const totalPages =
    Math.ceil(
      filteredProducts.length /
      productsPerPage
    );

  const page =
    Math.min(
      currentPage,
      Math.max(
        totalPages,
        1
      )
    );

  const startIndex =
    (page - 1) *
    productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      startIndex,
      startIndex +
        productsPerPage
    );

  // =========================
  // RETURN
  // =========================

  return (

    <section className="z-products-area">

      {/* SEARCH AND SORT */}

      <div className="z-products-toolbar">

        <input
          type="text"
          className="z-search"
          placeholder="⌕   Search handbags..."
          value={search}
          onChange={(e) => {

            setSearch(
              e.target.value
            );

            setCurrentPage(1);

          }}
        />

        <select
          className="z-sort"
          value={sort}
          onChange={(e) => {

            setSort(
              e.target.value
            );

            setCurrentPage(1);

          }}
        >

          <option value="popular">
            Sort by: Popularity
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

        </select>

      </div>

      {/* PRODUCTS */}

      <div className="z-product-grid">

        {currentProducts.length > 0 ? (

          currentProducts.map(
            (product) => (

              <div
                className="z-product-card"
                key={product.name}
              >

                {/* PRODUCT IMAGE */}

                <div className="z-product-image">

                  <button
                    className="z-heart-button"
                  >
                    ♡
                  </button>

                  <span>
                    👜
                  </span>

                </div>

                {/* PRODUCT DETAILS */}

                <div className="z-product-info">

                  <h3>
                    {product.name}
                  </h3>

                  <p className="z-product-price">

                    ₹
                    {product.price.toLocaleString(
                      "en-IN"
                    )}

                  </p>

                  {/* RATING */}

                  <div className="z-product-rating">

                    <span>
                      ★★★★★
                    </span>

                    <small>
                      ({product.reviews})
                    </small>

                  </div>

                  {/* ADD TO CART */}

                  <button
                    className="z-product-button"
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    🛒 &nbsp; Add to Cart
                  </button>

                </div>

              </div>

            )
          )

        ) : (

          <p>
            No handbags found.
          </p>

        )}

      </div>

      {/* PAGINATION */}

      {totalPages > 1 && (

        <div className="z-pagination">

          {/* PREVIOUS */}

          <button
            className="z-page-arrow"
            disabled={page === 1}
            onClick={() =>
              setCurrentPage(
                page - 1
              )
            }
          >
            ‹
          </button>

          {/* PAGE NUMBERS */}

          {Array.from(
            {
              length: totalPages
            },
            (_, index) => (

              <button
                key={index}
                className={`z-page-number ${
                  page ===
                  index + 1
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setCurrentPage(
                    index + 1
                  )
                }
              >
                {index + 1}
              </button>

            )
          )}

          {/* NEXT */}

          <button
            className="z-page-arrow"
            disabled={
              page === totalPages
            }
            onClick={() =>
              setCurrentPage(
                page + 1
              )
            }
          >
            ›
          </button>

        </div>

      )}

    </section>

  );
}

export default ShopProd;