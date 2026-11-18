import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Mart.css";

function Offercard() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "0 40px"
      }}
    >

      <Card
        style={{
          width: "100%",
          maxWidth: "1200px",
          overflow: "hidden"
        }}
      >
        <Card.Img
          variant="top"
          src="off.jpg"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover"
          }}
        />

        <Card.Body>
          <Card.Title>Special Offers</Card.Title>

          <Card.Text>
            Grab amazing deals and save more on your everyday essentials.
          </Card.Text>

          <Button
  variant="primary"
  onClick={() => navigate("/Shop?category=special")}
            >
            Shop Offers
            </Button>
        </Card.Body>
      </Card>


      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="off2.jpg" />

        <Card.Body>
          <Card.Title>Daily Deals</Card.Title>

          <Card.Text>
            Get great products at special prices every day.
          </Card.Text>

         <Button
  variant="primary"
  onClick={() => navigate("/Shop?category=daily")}
         >
          Shop Now
          </Button>
        </Card.Body>
      </Card>


      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="off1.jpg"  />

        <Card.Body>
          <Card.Title>Best Savings</Card.Title>

          <Card.Text>
            Save more on your favourite everyday products.
          </Card.Text>

          <Button
  variant="primary"
  onClick={() => navigate("/Shop?category=savings")}
           >
          Shop Now
          </Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Offercard;