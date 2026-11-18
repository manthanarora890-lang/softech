import Carousel from "react-bootstrap/Carousel";
import "./Mart.css";

function Cored() {
  return (
    <Carousel interval={1500} className="ghar-carousel">

      <Carousel.Item>
        <img className="d-block w-100 carousel-img"
          src="/b1.png" alt="First slide" />

        <Carousel.Caption className="ghar-caption">
          <h5>Everything You Need</h5>
          <p>Shop your everyday essentials in one place.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 carousel-img"
          src="/b2.png" alt="Second slide" />

        <Carousel.Caption className="ghar-caption">
          <h5>Great Deals Everyday</h5>
          <p>Quality products at affordable prices.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 carousel-img"
          src="/br.png" alt="Third slide" />

        <Carousel.Caption className="ghar-caption">
          <h5>Shop With Us</h5>
          <p>Everything you need, all in one place.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Cored;
