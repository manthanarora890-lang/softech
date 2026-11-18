import "./ziva.css";

function ShopFilters({ filters, setFilters, clearFilters }) {
  function toggleFilter(type, value) {
    setFilters((previous) => {
      const selected = previous[type];

      return {
        ...previous,
        [type]: selected.includes(value)
          ? selected.filter((item) => item !== value)
          : [...selected, value],
      };
    });
  }

  function isSelected(type, value) {
    return filters[type].includes(value);
  }

  const categories = [
    "Tote Bags",
    "Shoulder Bags",
    "Crossbody Bags",
    "Handbags",
    "Clutches",
  ];

  const prices = [
    "under2000",
    "2000to2500",
    "2500to3000",
    "above3000",
  ];

  const colors = ["Pink", "Cream", "Black", "Brown", "Green", "Mauve"];

  return (
    <aside className="z-filter-sidebar">
      <div className="z-filter-section">
        <h2>Categories</h2>

        {categories.map((category) => (
          <label className="z-filter-option" key={category}>
            <input
              type="checkbox"
              checked={isSelected("categories", category)}
              onChange={() => toggleFilter("categories", category)}
            />
            <span>{category}</span>
          </label>
        ))}
      </div>

      <div className="z-filter-section">
        <h2>Price Range</h2>

        {prices.map((price) => {
          const labels = {
            under2000: "Under ₹2,000",
            "2000to2500": "₹2,000 - ₹2,500",
            "2500to3000": "₹2,500 - ₹3,000",
            above3000: "Above ₹3,000",
          };

          return (
            <label className="z-filter-option" key={price}>
              <input
                type="checkbox"
                checked={isSelected("prices", price)}
                onChange={() => toggleFilter("prices", price)}
              />
              <span>{labels[price]}</span>
            </label>
          );
        })}
      </div>

      <div className="z-filter-section">
        <h2>Color</h2>

        <div className="z-color-options">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              className={`z-color-dot ${color.toLowerCase()} ${
                isSelected("colors", color) ? "selected" : ""
              }`}
              title={color}
              aria-label={color}
              aria-pressed={isSelected("colors", color)}
              onClick={() => toggleFilter("colors", color)}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="z-clear-button"
        onClick={clearFilters}
      >
        ↻ &nbsp; Clear Filters
      </button>
    </aside>
  );
}

export default ShopFilters;