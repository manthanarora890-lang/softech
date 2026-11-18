import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Mart.css";

function Depcard() {

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "0 40px"
      }}
    >

      {/* Fruits & Vegetables */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="car1.jpg" />

        <Card.Body>
          <Card.Title>Fruits & Vegetables</Card.Title>

          <Card.Text>
            Fresh fruits and vegetables for your everyday needs.
          </Card.Text>

          <Button
            variant="primary"
            style={{ width: "100%", height: "40%" }}
            onClick={() => navigate("/shop?category=fruits")}
          >
            Go
          </Button>
        </Card.Body>
      </Card>


      {/* Dairy & Eggs */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="dairy.jpg" />

        <Card.Body>
          <Card.Title>Dairy & Eggs</Card.Title>

          <Card.Text>
            Fresh milk, dairy products and eggs for your home.
          </Card.Text>

          <Button
            variant="primary"
            style={{ width: "100%", height: "40%" }}
            onClick={() => navigate("/shop?category=dairy")}
          >
            Go
          </Button>
        </Card.Body>
      </Card>


      {/* Snacks & Biscuits */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="chip.jpg" />

        <Card.Body>
          <Card.Title>Snacks & Biscuits</Card.Title>

          <Card.Text>
            Tasty snacks, biscuits and treats for every craving.
          </Card.Text>

          <Button
            variant="primary"
            style={{ width: "100%", height: "40%" }}
            onClick={() => navigate("/shop?category=snacks")}
          >
            Go
          </Button>
        </Card.Body>
      </Card>


      {/* Beverages */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="bev.jpg" />

        <Card.Body>
          <Card.Title>Beverages</Card.Title>

          <Card.Text>
            Refreshing drinks, juices, tea and coffee for every occasion.
          </Card.Text>

          <Button
            variant="primary"
            style={{ width: "100%", height: "40%" }}
            onClick={() => navigate("/shop?category=beverages")}
          >
            Go
          </Button>
        </Card.Body>
      </Card>


      {/* Instant & Packaged Food */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="inst.jpg" />

        <Card.Body>
          <Card.Title>Instant & Packaged Food</Card.Title>

          <Card.Text>
            Quick meals, noodles, sauces and ready-to-eat products.
          </Card.Text>

          <Button
            variant="primary"
            style={{ width: "100%", height: "40%" }}
            onClick={() => navigate("/shop?category=instant")}
          >
            Go
          </Button>
        </Card.Body>
      </Card>


      {/* Pet Care */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="pet.jpg" />

        <Card.Body>
          <Card.Title>Pet Care</Card.Title>

          <Card.Text>
            Everything your pets need, from food and treats to care essentials.
          </Card.Text>

          <Button
            variant="primary"
            style={{ width: "100%", height: "40%" }}
            onClick={() => navigate("/shop?category=pet")}
          >
            Go
          </Button>
        </Card.Body>
      </Card>


      {/* Home & Cleaning */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="clean.jpg" />

        <Card.Body>
          <Card.Title>Home & Cleaning</Card.Title>

          <Card.Text>
            Cleaning products and household essentials for your home.
          </Card.Text>

          <Button
            variant="primary"
            style={{ width: "100%", height: "40%" }}
            onClick={() => navigate("/shop?category=cleaning")}
          >
            Go
          </Button>
        </Card.Body>
      </Card>


      {/* Personal Care */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="pers.jpg" />

        <Card.Body>
          <Card.Title>Personal Care</Card.Title>

          <Card.Text>
            Everyday essentials for personal hygiene and care.
          </Card.Text>

          <Button
            variant="primary"
            style={{ width: "100%", height: "40%" }}
            onClick={() => navigate("/shop?category=personal")}
          >
            Go
          </Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Depcard;