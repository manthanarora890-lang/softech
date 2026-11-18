import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./ziva.css";

function Category() {
  return (
    <div className="category-section">
      <Container>
        <h2 className="category-title">Shop by Category</h2>
        <p className="category-subtitle">
          Find the perfect bag for every moment.
        </p>

        <Row>
          <Col xs={6} md={3} className="mb-4">
            <Card className="category-card">
              <Card.Img src="/tote.jpeg" alt="Tote bags" />
              <Card.Body>
                <Card.Title>CRYSTAL BAGS</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={3} className="mb-4">
            <Card className="category-card">
              <Card.Img src="/shoulder.jpeg" alt="Shoulder bags" />
              <Card.Body>
                <Card.Title>PEARL BAGS</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={3} className="mb-4">
            <Card className="category-card">
              <Card.Img src="/crossbody.jpeg" alt="Crossbody bags" />
              <Card.Body>
                <Card.Title>TOTE BAG</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={3} className="mb-4">
            <Card className="category-card">
              <Card.Img src="/mini.jpeg" alt="Mini bags" />
              <Card.Body>
                <Card.Title>WAIST BAGS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Category;