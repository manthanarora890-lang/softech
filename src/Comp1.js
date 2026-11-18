import { useState } from "react";
import "./First.css"
import Button from 'react-bootstrap/Button';
 import Alert from 'react-bootstrap/Alert';
 import Badge from 'react-bootstrap/Badge';
 import Breadcrumb from 'react-bootstrap/Breadcrumb';
 import ButtonGroup from 'react-bootstrap/ButtonGroup';
 import Card from 'react-bootstrap/Card';
 import Accordion from 'react-bootstrap/Accordion';
 import Dropdown from 'react-bootstrap/Dropdown';
 import Figure from 'react-bootstrap/Figure';
 import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Pagination from 'react-bootstrap/Pagination';
import Placeholder from 'react-bootstrap/Placeholder';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Toast from 'react-bootstrap/Toast';
function Comp1() 
{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  return (
    <div>
     <h1>button</h1>
        <Button variant="primary">Primary</Button>
        <Button variant="outline-primary">Primary</Button>
      <h1>alert</h1>
      {[
        'primary',
      ].map((variant) => (
        <>
        <Alert key={variant} variant={variant}>
          oyaaa {variant} hlooo
        </Alert>
        <h1>badges</h1>
         <Button variant="primary">
      click<Badge bg="secondary">here</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
 <h1>breadcrumb</h1>
     <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    <h1>button group</h1>
     <ButtonGroup aria-label="Basic example">
      <Button variant="success">go</Button>
      <Button variant="warning">wait</Button>
      <Button variant="danger">stop</Button>
    </ButtonGroup>
    <h1>cards</h1>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="can vote.jpg"/>
      <Card.Body>
        <Card.Title>voting eligiblity</Card.Title>
        <Card.Text>
          you can legally vote now...
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <h1>accordian</h1>
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          hiiii.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
           byy..
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <h1>dropdown</h1>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">hi</Dropdown.Item>
        <Dropdown.Item href="#/action-2">hii</Dropdown.Item>
        <Dropdown.Item href="#/action-3">hiii</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <h1>figures</h1>
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="logo512.png"
      />
      <Figure.Caption>
        idk
      </Figure.Caption>
    </Figure>
    <div>
      <h1>images</h1>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="caro1.jpg" rounded />
        </Col>
        <br />
        <Col xs={6} md={4}>
          <Image src="caro1.jpg" roundedCircle />
        </Col>
        <br />
        <Col xs={6} md={4}>
          <Image src="caro1.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
    </div>
    <h1>listgroup</h1>
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        by active
      </ListGroup.Item>
      <ListGroup.Item as="li">byy</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
         byy disabled
      </ListGroup.Item>
      <ListGroup.Item as="li">byyy</ListGroup.Item>
    </ListGroup>
    <h1>modalss</h1>
     <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    <h1>navigation</h1>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <h1>offcanvas</h1>
     <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>side slide</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          oyaaaa
        </Offcanvas.Body>
      </Offcanvas>
      <h1>overlay</h1>
       <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
    <h1>pagination</h1>
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    <h1>placeholder</h1>
     <div className="d-flex justify-content-around">
       
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="caro2.jpg" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
    <h1>process bar</h1>
    <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
    <h1>spinner</h1>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <h1>table</h1>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <h1>tabs</h1>
     <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>
    </Tabs>
    <h1>toast</h1>
     <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">jj</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>byy, world! </Toast.Body>
    </Toast>
    </>
      ))}
     
      </div>
  );
}

export default Comp1;
