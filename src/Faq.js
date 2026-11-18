import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import './soft.css';

function Faq() {
  return (
    <section className="faq-section">
      <Container>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find answers to some of the most common questions about our courses.
        </p>

        <Accordion defaultActiveKey="0">

          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What courses does Softech offer?
            </Accordion.Header>
            <Accordion.Body>
              Softech offers courses in Data Structures, Full Stack Development,
              Java, C/C++, and Digital Electronics. Our courses focus on
              concepts, practical coding, and problem-solving.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Are these courses suitable for beginners?
            </Accordion.Header>
            <Accordion.Body>
              Yes. Our courses are designed for beginners as well as students
              who already have some programming knowledge. Concepts are
              explained step-by-step with practical examples.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Do you provide practical coding practice?
            </Accordion.Header>
            <Accordion.Body>
              Yes. We believe in learning by doing. Students get hands-on
              coding practice and practical examples to understand concepts
              more effectively.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Which programming languages are taught?
            </Accordion.Header>
            <Accordion.Body>
              We teach programming languages including C, C++, and Java.
              Full Stack Development also covers the technologies required
              for frontend and backend development.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              How can I contact Softech?
            </Accordion.Header>
            <Accordion.Body>
              You can contact us through our Contact Us section for information
              about courses, classes, timings, and enrollment.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
    </section>
  );
}

export default Faq;
