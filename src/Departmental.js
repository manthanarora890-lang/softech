import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSearchParams, useNavigate } from "react-router-dom";
import Deponav from "./Deponav";
import "./Mart.css";

const productData = {
  fruits: [
    {
      id: 1,
      name: "Fresh Apples",
      image: "app.avif",
      options: [
        { quantity: "250g", price: 30 },
        { quantity: "500g", price: 60 },
        { quantity: "1kg", price: 120 },
        { quantity: "2kg", price: 230 }
      ]
    },
    {
      id: 2,
      name: "Fresh Orange",
      image: "oran.avif",
      options: [
        { quantity: "250g", price: 20 },
        { quantity: "500g", price: 40 },
        { quantity: "1kg", price: 80 },
        { quantity: "2kg", price: 140 }
      ]
    },
    {
      id: 3,
      name: "Fresh Onion",
      image: "on.avif",
      options: [
        { quantity: "250g", price: 25 },
        { quantity: "500g", price: 50 },
        { quantity: "1kg", price: 100 },
        { quantity: "2kg", price: 190 }
      ]
    },
    {
      id: 4,
      name: "Fresh Tomatoes",
      image: "tom.avif",
      options: [
        { quantity: "250g", price: 13 },
        { quantity: "500g", price: 25 },
        { quantity: "1kg", price: 50 },
        { quantity: "2kg", price: 90 }
      ]
    },
    {
      id: 5,
      name: "Fresh Potato",
      image: "pot.avif",
      options: [
        { quantity: "250g", price: 13 },
        { quantity: "500g", price: 25 },
        { quantity: "1kg", price: 45 },
        { quantity: "2kg", price: 80 }
      ]
    }
  ],

  dairy: [
    {
      id: 6,
      name: "Amul Fresh Milk",
      image: "milk.avif",
      options: [
        { quantity: "500ml", price: 36 },
        { quantity: "1 litre", price: 70 },
        { quantity: "2 litres", price: 135 }
      ]
    },
    {
      id: 7,
      name: "Amul Masti Dahi",
      image: "curd.avif",
      options: [
        { quantity: "100g", price: 20 },
        { quantity: "200g", price: 40 },
        { quantity: "500g", price: 100 }
      ]
    },
    {
      id: 8,
      name: "Cheese Slice",
      image: "cheese.avif",
      options: [
        { quantity: "1 pack", price: 80 },
        { quantity: "2 packs", price: 160 },
        { quantity: "5 packs", price: 400 }
      ]
    },
    {
      id: 9,
      name: "Mozzarella Cheddar Blend",
      image: "moz.avif",
      options: [
        { quantity: "200g", price: 125 },
        { quantity: "500g", price: 310 },
        { quantity: "1kg", price: 600 }
      ]
    },
    {
      id: 10,
      name: "Egg Tray",
      image: "egg.avif",
      options: [
        { quantity: "6 pcs", price: 54 },
        { quantity: "10 pcs", price: 88 },
        { quantity: "30 pcs", price: 240 }
      ]
    }
  ],

  snacks: [
    {
      id: 11,
      name: "Potato Chips",
      image: "unc.avif",
      options: [
        { quantity: "53g", price: 20 },
        { quantity: "159g", price: 55 }
      ]
    },
    {
      id: 12,
      name: "Bikaji Bikaneri",
      image: "bika.avif",
      options: [
        { quantity: "1 pack", price: 30 },
        { quantity: "3 packs", price: 80 }
      ]
    },
    {
      id: 13,
      name: "Act II Popcorn",
      image: "pop.avif",
      options: [
        { quantity: "35g", price: 15 },
        { quantity: "105g", price: 45 }
      ]
    },
    {
      id: 14,
      name: "Natkhat Rice Puffs",
      image: "nat.avif",
      options: [
        { quantity: "88g", price: 40 },
        { quantity: "176g", price: 75 }
      ]
    },
    {
      id: 15,
      name: "Rusk",
      image: "rusk.avif",
      options: [
        { quantity: "230g", price: 52 },
        { quantity: "460g", price: 100 }
      ]
    }
  ],

  beverages: [
    {
      id: 16,
      name: "Raw Juice",
      image: "raw.avif",
      options: [
        { quantity: "200ml", price: 60 },
        { quantity: "2 pcs", price: 110 }
      ]
    },
    {
      id: 17,
      name: "Coca-Cola",
      image: "coc.avif",
      options: [
        { quantity: "750ml", price: 40 },
        { quantity: "1.25L", price: 75 }
      ]
    },
    {
      id: 18,
      name: "Mineral Water",
      image: "wat.avif",
      options: [
        { quantity: "1L", price: 20 },
        { quantity: "2L", price: 35 }
      ]
    },
    {
      id: 19,
      name: "ORS",
      image: "ors.avif",
      options: [
        { quantity: "21g", price: 22 },
        { quantity: "2 packs", price: 40 }
      ]
    },
    {
      id: 20,
      name: "Iced Latte",
      image: "cof.avif",
      options: [
        { quantity: "170ml", price: 50 },
        { quantity: "2 packs", price: 140 }
      ]
    }
  ],

  instant: [
    {
      id: 21,
      name: "Instant Noodles",
      image: "mag.avif",
      options: [
        { quantity: "95g", price: 20 },
        { quantity: "Family pack 280g", price: 60 }
      ]
    },
    {
      id: 22,
      name: "Pasta",
      image: "pas.avif",
      options: [
        { quantity: "400g", price: 59 },
        { quantity: "2 packs", price: 110 }
      ]
    },
    {
      id: 23,
      name: "Dosa Batter",
      image: "dosa.avif",
      options: [
        { quantity: "500g", price: 128 },
        { quantity: "3 packs", price: 370 }
      ]
    },
    {
      id: 24,
      name: "Frozen Food",
      image: "hi.avif",
      options: [
        { quantity: "400g", price: 129 },
        { quantity: "3 packs", price: 360 }
      ]
    },
    {
      id: 25,
      name: "Ready to Eat",
      image: "bir.avif",
      options: [
        { quantity: "265g", price: 135 },
        { quantity: "3 packs", price: 400 }
      ]
    }
  ],

  pet: [
    {
      id: 26,
      name: "Dog Food",
      image: "dog.avif",
      options: [
        { quantity: "130g", price: 70 },
        { quantity: "1kg", price: 272 }
      ]
    },
    {
      id: 27,
      name: "Cat Food",
      image: "cat.avif",
      options: [
        { quantity: "75g", price: 81 },
        { quantity: "25 x 15g", price: 362 }
      ]
    },
    {
      id: 28,
      name: "Pet Treats",
      image: "tre.avif",
      options: [
        { quantity: "1 pack", price: 100 },
        { quantity: "2 packs", price: 190 }
      ]
    },
    {
      id: 29,
      name: "Pet Shampoo",
      image: "sham.avif",
      options: [
        { quantity: "200ml", price: 140 },
        { quantity: "500ml", price: 280 }
      ]
    },
    {
      id: 30,
      name: "Pet Perfume",
      image: "per.avif",
      options: [
        { quantity: "100ml", price: 500 },
        { quantity: "2 x 100ml", price: 900 }
      ]
    }
  ],

  cleaning: [
    {
      id: 31,
      name: "Dishwashing Liquid",
      image: "vim.avif",
      options: [
        { quantity: "500ml", price: 140 },
        { quantity: "3L", price: 419 }
      ]
    },
    {
      id: 32,
      name: "Floor Cleaner",
      image: "phy.avif",
      options: [
        { quantity: "1L", price: 63 },
        { quantity: "5L", price: 188 }
      ]
    },
    {
      id: 33,
      name: "Laundry Detergent",
      image: "surf.avif",
      options: [
        { quantity: "1L", price: 180 },
        { quantity: "5L", price: 790 }
      ]
    },
    {
      id: 34,
      name: "Toilet Cleaner",
      image: "tc.avif",
      options: [
        { quantity: "600ml", price: 130 },
        { quantity: "1L", price: 215 }
      ]
    },
    {
      id: 35,
      name: "Garbage Bag",
      image: "gb.avif",
      options: [
        { quantity: "30 pcs", price: 65 },
        { quantity: "90 pcs", price: 160 }
      ]
    }
  ],

  personal: [
    {
      id: 36,
      name: "Shampoo",
      image: "sha.avif",
      options: [
        { quantity: "200ml", price: 320 },
        { quantity: "500ml", price: 660 }
      ]
    },
    {
      id: 37,
      name: "Bath Soap",
      image: "soap.avif",
      options: [
        { quantity: "1 bar", price: 35 },
        { quantity: "4 bars", price: 130 }
      ]
    },
    {
      id: 38,
      name: "Toothpaste",
      image: "tooth.avif",
      options: [
        { quantity: "75g", price: 100 },
        { quantity: "3 packs", price: 260 }
      ]
    },
    {
      id: 39,
      name: "Handwash",
      image: "hand.avif",
      options: [
        { quantity: "200ml", price: 70 },
        { quantity: "750ml", price: 240 }
      ]
    },
    {
      id: 40,
      name: "Facewash",
      image: "fa.avif",
      options: [
        { quantity: "100ml", price: 300 },
        { quantity: "2 packs", price: 550 }
      ]
    }
  ],

  special: [
    {
      id: 41,
      name: "Special Fruit Combo",
      image: "fruc.avif",
      options: [
        { quantity: "1 pack", price: 109 },
        { quantity: "3 packs", price: 299 }
      ]
    },
    {
      id: 42,
      name: "Special Snack Combo",
      image: "snaccccccccccc.avif",
      options: [
        { quantity: "1 piece", price: 300 },
        { quantity: "2 pieces", price: 550 }
      ]
    },
    {
      id: 43,
      name: "Special Protein Combo",
      image: "prot.avif",
      options: [
        { quantity: "1 pack", price: 110 },
        { quantity: "3 packs", price: 300 }
      ]
    },
    {
      id: 44,
      name: "Special Namkeen Combo",
      image: "nam.avif",
      options: [
        { quantity: "180g", price: 65 },
        { quantity: "360g", price: 120 }
      ]
    },
    {
      id: 45,
      name: "Pepsi Combo",
      image: "pep.avif",
      options: [
        { quantity: "3 x 300ml", price: 120 },
        { quantity: "6 x 300ml", price: 210 }
      ]
    }
  ]
};

productData.daily = [
  productData.fruits[0],
  productData.dairy[0],
  productData.fruits[1],
  productData.fruits[3]
];

productData.savings = [
  productData.fruits[0],
  productData.dairy[0],
  productData.fruits[1],
  productData.fruits[3],
  {
    id: 46,
    name: "Cheese",
    image: "cheese.avif",
    options: [
      { quantity: "100g", price: 45 },
      { quantity: "200g", price: 85 },
      { quantity: "500g", price: 200 }
    ]
  }
];

function Departmental() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const category = searchParams.get("category") || "fruits";

  const [selectedQuantity, setSelectedQuantity] = useState({});

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("gharCart")) || [];
    } catch {
      return [];
    }
  });

  const products = productData[category] || productData.fruits;

  useEffect(() => {
    localStorage.setItem("gharCart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  function handleAddToCart(product) {
    const quantity =
      selectedQuantity[product.id] || product.options[0].quantity;

    const option = product.options.find(
      (item) => item.quantity === quantity
    );

    if (!option) return;

    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) =>
          item.id === product.id && item.quantity === quantity
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id && item.quantity === quantity
            ? {
                ...item,
                count: (Number(item.count) || 1) + 1
              }
            : item
        );
      }

      return [
        ...previousCart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          quantity,
          price: option.price,
          count: 1
        }
      ];
    });

    alert(product.name + " added to cart!");
  }

  function openProductDetails(product) {
    navigate(`/product/${product.id}`, {
      state: { product: product }
    });
  }

  return (
    <>
      <Deponav />

      <div className="department-products">
        <h2 className="text-center my-4">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>

        <div className="text-end mb-3">
          <strong>
            Cart Items:{" "}
            {cart.reduce(
              (total, item) => total + (Number(item.count) || 1),
              0
            )}
          </strong>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          {products.map((product) => {
            const quantity =
              selectedQuantity[product.id] ||
              product.options[0].quantity;

            const selectedOption = product.options.find(
              (option) => option.quantity === quantity
            );

            return (
              <Card
                key={`${category}-${product.id}`}
                style={{
                width: "16rem",
                marginBottom: "20px"
                 }}
                  className="shadow-sm"
                 >
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{
                    height: "180px",
                    objectFit: "contain",
                    padding: "10px"
                  }}
                />

                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>

                  <Form.Label>Choose Quantity</Form.Label>

                  <Form.Select
                    value={quantity}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) =>
                      setSelectedQuantity((previous) => ({
                        ...previous,
                        [product.id]: e.target.value
                      }))
                    }
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

                  <Card.Text className="mt-3">
                    Price: <strong>₹{selectedOption.price}</strong>
                  </Card.Text>  
                <Button
                 variant="outline-success"
                 className="w-100 mb-2"
                 onClick={() => openProductDetails(product)}
                 > 
                 View Details
                  </Button>
                  <Button
                    variant="success"
                    className="w-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Departmental;
