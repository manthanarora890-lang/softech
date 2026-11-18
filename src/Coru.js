import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Coru()
{
return(<center>
  <Container>
    <Row>
    <Col>
      <Carousel>
      <Carousel.Item>
        <img src='caro1.jpg' />
        <Carousel.Caption>
          <h3>Friendly Learning Environment</h3>
          <p>Learn in a supportive, comfortable, and friendly environment where you can ask questions freely and grow your coding skills with confidence.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='caro2.jpg' />
        <Carousel.Caption>
          <h3>Computer Science</h3>
          <p>Build a strong foundation in Computer Science with programming, problem-solving, data structures, and modern technologies.
Learn practical skills that prepare you for academic success and a successful career in IT.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='caro3.png' />
        <Carousel.Caption>
          <h3>Coding</h3>
          <p>
            Learn coding from basics to advanced with practical examples and hands-on projects.
Improve your problem-solving skills and build confidence to create real-world applications.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
    </center>
    );
}
    export default Coru;