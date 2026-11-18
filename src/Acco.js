import Accordion from 'react-bootstrap/Accordion';
function Acco()
{
    return(
        <div>
         <h1>FAQ</h1>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Which programming languages do you teach?</Accordion.Header>
        <Accordion.Body>
          We teach C, C++, Java, Python, JavaScript, and other popular programming languages.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Is the course suitable for beginners?</Accordion.Header>
        <Accordion.Body>
      Yes, our courses start from the basics and gradually move to advanced concepts.
        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="2">
        <Accordion.Header>3. Do you provide practical coding practice?</Accordion.Header>
        <Accordion.Body>
       Yes, students get hands-on coding practice, exercises, and real-world projects
        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="3">
        <Accordion.Header>4. Do you teach DSA? </Accordion.Header>
        <Accordion.Body>
        Yes, we cover Data Structures and Algorithms with concepts, problem-solving, and coding practice
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. Do you provide Full Stack Development training?</Accordion.Header>
        <Accordion.Body> 
          Yes, we teach frontend, backend, databases, APIs, and project development.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    );
}
export default Acco;