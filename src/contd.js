import Footd from "./Footd";
import "./Mart.css";
import Navd from "./Navd";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contd() {
  return (
    <>
      <Navd />

      <div className="contact-page">

        <h5>CONTACT US</h5>
        <h1>We are listening. Get in touch</h1>

        <p>
          Have a question, suggestion or need help with your order?
          We are here to help you.
        </p>

        <div className="contact-box">

          <Card style={{ backgroundColor:"#DDE8D5", border: "none" }}>
            <Card.Body>
              <Card.Title>Customer Care</Card.Title>
              <Card.Text>
                Call us: 00000000000
                <br />
                Email: mart@1234.com
                <br />
                Mon-Sat, 9:30 AM - 6:30 PM IST
              </Card.Text>
            </Card.Body>
             <Card.Body>
              <Card.Title>Registered office</Card.Title>
              <Card.Text>
                Dailyshop pvt ltd
                <br />
                 Address:i don't know
              </Card.Text>
            </Card.Body>
             <Card.Body>
              <Card.Title>Corporate office</Card.Title>
              <Card.Text>
                Dailyshop pvt ltd
                <br />
                 Address:i don't know
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ backgroundColor:"#E6D5E8", border: "none" }}>>
            <Card.Body>
              <Card.Title>Send Us a Message</Card.Title>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message"
                  />
                </Form.Group>

                <Button variant="dark">Send Message</Button>
              </Form>

            </Card.Body>
          </Card>

        </div>

      </div>

      <Footd />
    </>
  );
}

export default Contd;