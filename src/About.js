import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import "./soft.css";


function About() {
  return(  
    <div className="about-page">
        <Navigation />
      {/* About Hero */}
      <section className="about-hero">
        <Container>
          <div className="about-heading">
            <h1>About Softech</h1>
            <p>
              Learn Today. Build Tomorrow.
            </p>
          </div>

          <div className="about-intro">
            <h2>Empowering Students Through Practical Learning</h2>

            <p>
              At <b>Softech</b>, we are a career-focused coding institute
              dedicated to helping students develop strong programming and
              technical skills.
            </p>

            <p>
              We believe that coding becomes easier when concepts are explained
              clearly and practiced regularly. Our courses focus on
              <b> practical learning, hands-on coding, real-world projects,
              and expert guidance.</b>
            </p>

            <p>
              Whether you are a beginner or looking to improve your existing
              skills, we provide a friendly and supportive environment where
              you can learn, practice, and grow with confidence.
            </p>
          </div>
        </Container>
      </section>


      {/* Why Choose Us */}
      <section className="why-section">
        <Container>

          <div className="section-title">
            <h2>Why Choose Softech?</h2>
            <p>
              Everything you need to build strong programming skills.
            </p>
          </div>

          <Row className="g-4">

            <Col lg={3} md={6} sm={12}>
              <Card className="why-card">
                <Card.Body>
                  <div className="why-icon">💻</div>
                  <h3>Practical Learning</h3>
                  <p>
                    Learn through coding exercises, assignments, hands-on
                    practice, and real-world projects.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <Card className="why-card">
                <Card.Body>
                  <div className="why-icon">👨‍🏫</div>
                  <h3>Expert Guidance</h3>
                  <p>
                    Learn concepts step-by-step with proper guidance and
                    support from experienced instructors.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <Card className="why-card">
                <Card.Body>
                  <div className="why-icon">🤝</div>
                  <h3>Friendly Environment</h3>
                  <p>
                    Ask questions freely, practice coding, and learn in a
                    comfortable and supportive environment.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <Card className="why-card">
                <Card.Body>
                  <div className="why-icon">🚀</div>
                  <h3>Career Focused</h3>
                  <p>
                    Develop practical technical skills that help you prepare
                    for projects, internships, and future opportunities.
                  </p>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>


      {/* Achievements */}
      <section className="achievement-section">
        <Container>

          <div className="section-title">
            <h2>Our Achievements</h2>
            <p>Growing together through learning and technology.</p>
          </div>

          <Row className="g-4">

            <Col lg={3} md={6} sm={6}>
              <div className="achievement-card">
                <h2>500+</h2>
                <p>Students Trained</p>
              </div>
            </Col>

            <Col lg={3} md={6} sm={6}>
              <div className="achievement-card">
                <h2>10+</h2>
                <p>Courses Offered</p>
              </div>
            </Col>

            <Col lg={3} md={6} sm={6}>
              <div className="achievement-card">
                <h2>5+</h2>
                <p>Years Experience</p>
              </div>
            </Col>

            <Col lg={3} md={6} sm={6}>
              <div className="achievement-card">
                <h2>50+</h2>
                <p>Projects Completed</p>
              </div>
            </Col>

          </Row>
        </Container>
      </section>


      {/* Mission */}
      <section className="mission-section">
        <Container>
          <div className="mission-box">
            <h2>Our Mission</h2>

            <p>
              Our mission is to create a learning environment where students
              don't just learn to code — they learn to
              <b> think, solve problems, and build.</b>
            </p>

            <Button href="/contact" className="mission-btn">
              Start Your Learning Journey
            </Button>
            </div>
        </Container>
      </section>
    </div>
  
  );
}
export default About;