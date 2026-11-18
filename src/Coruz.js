import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./ziva.css";

function Hero() {
  return (
    <div className="hero-section">
      <Container className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">THE ZIVARA COLLECTION</p>
          <h1>Elegance in Every Detail</h1>
          <p>
            Discover handbags designed to make every moment feel special.
          </p>
          <Button className="hero-button">Shop Now</Button>
        </div>

        <div className="hero-image">
           
        </div>
      </Container>
    </div>
  );
}

export default Hero;