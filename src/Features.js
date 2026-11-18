import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import "./soft.css";

function Features() {
  return (
    <div className="features-page">
        <Navigation />

      {/* Hero */}
      <section className="features-hero">
        <Container>
          <h1>Why Learn With Softech?</h1>

          <p>
            Build strong programming skills through practical learning,
            expert guidance, and real-world projects.
          </p>
        </Container>
      </section>


      {/* Features */}
      <section className="features-section">
        <Container>

          <div className="features-title">
            <h2>What We Offer</h2>
            <p>
              Everything you need to learn, practice, and grow your technical skills.
            </p>
          </div>

          <Row className="g-4">

            <Col lg={3} md={6} sm={12}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">💻</div>
                  <h3>Hands-on Coding</h3>
                  <p>
                    Practice coding through exercises, assignments, and
                    practical tasks.
                  </p>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={3} md={6} sm={12}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">🎯</div>
                  <h3>Practical Learning</h3>
                  <p>
                    Understand concepts by applying them to real-world
                    problems and projects.
                  </p>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={3} md={6} sm={12}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">👨‍🏫</div>
                  <h3>Expert Guidance</h3>
                  <p>
                    Get step-by-step guidance and clear explanations from
                    experienced instructors.
                  </p>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={3} md={6} sm={12}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">🤝</div>
                  <h3>Friendly Environment</h3>
                  <p>
                    Learn comfortably, ask questions freely, and improve
                    your skills with confidence.
                  </p>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={3} md={6} sm={12}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">🧩</div>
                  <h3>Problem Solving</h3>
                  <p>
                    Improve logical thinking and problem-solving skills through
                    coding challenges.
                  </p>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={3} md={6} sm={12}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">🚀</div>
                  <h3>Real-World Projects</h3>
                  <p>
                    Build practical projects and understand how programming
                    is used in real applications.
                  </p>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={3} md={6} sm={12}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">📚</div>
                  <h3>Regular Practice</h3>
                  <p>
                    Strengthen your knowledge through regular practice,
                    assignments, and revision.
                  </p>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={3} md={6} sm={12}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">🎓</div>
                  <h3>Beginner Friendly</h3>
                  <p>
                    Start from the basics and gradually learn advanced
                    programming concepts.
                  </p>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>


      {/* CTA */}
      <section className="features-cta">
        <Container>
          <h2>Ready to Start Learning?</h2>

          <p>
            Take the first step toward building your programming skills.
          </p>

          <Button href="/contact">
            Contact Us
          </Button>
        </Container>
      </section>

    </div>
  );
}

export default Features;