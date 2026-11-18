import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ziva.css";

function Featured() {
  return (
    <div className="featured-section">
      <Container>
        <h2 className="featured-title">Featured Collection</h2>
        <p className="featured-subtitle">
          Discover handbags made for your everyday elegance.
        </p>

        <Row>
          <Col xs={12} sm={6} lg={3} className="mb-4">
            <Card className="product-card">
              <Card.Img
                variant="top"
                src="/bag1.jpeg"
                alt="Everyday handbag"
              />
              <Card.Body>
                <Card.Title>The Everyday Bag</Card.Title>
                <Card.Text>Elegant, simple, and perfect for daily use.</Card.Text>
                <Button className="product-button">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3} className="mb-4">
            <Card className="product-card">
              <Card.Img
                variant="top"
                src="/bag2.jpeg"
                alt="Classic shoulder bag"
              />
              <Card.Body>
                <Card.Title>Classic Shoulder</Card.Title>
                <Card.Text>A timeless style for every occasion.</Card.Text>
                <Button className="product-button">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3} className="mb-4">
            <Card className="product-card">
              <Card.Img
                variant="top"
                src="/bag3.jpeg"
                alt="Mini handbag"
              />
              <Card.Body>
                <Card.Title>The Mini Edit</Card.Title>
                <Card.Text>Small in size, big on style.</Card.Text>
                <Button className="product-button">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3} className="mb-4">
            <Card className="product-card">
              <Card.Img
                variant="top"
                src="/bag4.jpeg"
                alt="Grey handbag"
              />
              <Card.Body>
                <Card.Title>Soft Structure</Card.Title>
                <Card.Text>A graceful bag with a modern look.</Card.Text>
                <Button className="product-button">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Featured;