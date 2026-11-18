 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 function Coursecard()
 {
  return(
    <center>
      <h1>COURSES</h1>
      <div style={{display: "flex",
    gap: "60px",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "0 40px"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data.jpg" />
      <Card.Body>
        <Card.Title>DATA STRUCTURES</Card.Title>
        <Card.Text>
           Learn DSA from basic to advanced level in an easy and simple way. Understand concepts, algorithms, and coding with practical examples.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="full.jpg" />
      <Card.Body>
        <Card.Title>FULL STACK</Card.Title>
        <Card.Text>
           Learn complete Full Stack Development from frontend to backend in an easy and practical way.
Build real-world websites and applications using modern technologies, databases, and APIs.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="java.jpg" />
      <Card.Body>
        <Card.Title>JAVA</Card.Title>
        <Card.Text>
          Learn Java from basics to advanced concepts with simple explanations and practical examples.
Build strong programming skills through coding, OOP, problem-solving, and real-world applications.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="c++.png" />
      <Card.Body>
        <Card.Title>c/c++</Card.Title>
        <Card.Text>
         Learn C and C++ from basic to advanced concepts with simple explanations and practical coding.
Build strong programming and problem-solving skills through hands-on examples and real-world applications.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </center>
  );
 }
 export default Coursecard;