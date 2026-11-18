import Navigation from "./Navigation";
import Foot from "./Foot";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact()
{
    return(
        <>
            <Navigation />

            <Container className="mt-5">
                <h1 className="text-center">Contact Us</h1>

                <p className="text-center">
                    Have questions about our courses? Get in touch with us.
                </p>

                <Row className="mt-4">
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Phone</Card.Title>
                                <Card.Text>
                                    +91 XXXXX XXXXX
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Email</Card.Title>
                                <Card.Text>
                                    infoSofttech.com
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Address</Card.Title>
                                <Card.Text>
                                     Aggarsain Colony, Sirsa, Haryana
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={8} className="mx-auto">
                        <h3>Send Us a Message</h3>

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
                                <Form.Control as="textarea" rows={4}
                                    placeholder="Enter your message" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Foot />
        </>
    );
}

export default Contact;