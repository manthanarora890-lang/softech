import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./First.css";
import { Link } from 'react-router-dom';

function Navigation()
{
    return(
        <div className='diva'> 
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>

                <Navbar.Brand as={Link} to="/">
                    <img src="soft1logo.jpg" className="logo" alt="logo" />
                </Navbar.Brand>

                {/* Mobile menu button */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="udar ms-auto">
                        <Nav.Link as={Link} to="/" className="text-light">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/features" className="text-light">
                             Features
                        </Nav.Link>

                        <Nav.Link as={Link} to="/contact" className="text-light">
                            Contact Us
                        </Nav.Link>

                        <Nav.Link as={Link} to="/about-us" className="text-light">
                            About Us
                        </Nav.Link>

                         <Nav.Link as={Link} to="/login" className="text-light">
                            login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
        </div>
    );
}

export default Navigation;