import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./ziva.css";

function WhyZivara() {
  return (
    <div className="why-section">
      <Container>
        <h2 className="why-title">Why Choose Zivara?</h2>

        <p className="why-subtitle">
          Thoughtfully designed for your everyday moments.
        </p>

        <Row>
          <Col xs={12} md={4} className="mb-4">
            <Card className="why-card">
              <Card.Body>
                <div className="why-icon">✦</div>
                <h3>Timeless Style</h3>
                <p>
                  Elegant designs that never go out of style.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="mb-4">
            <Card className="why-card">
              <Card.Body>
                <div className="why-icon">♡</div>
                <h3>Made with Care</h3>
                <p>
                  Thoughtful details in every bag.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="mb-4">
            <Card className="why-card">
              <Card.Body>
                <div className="why-icon">✧</div>
                <h3>Everyday Versatility</h3>
                <p>
                  Handbags for work, outings, and special moments.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyZivara;