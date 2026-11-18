import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./StudentNavigation.css";
import { useNavigate } from "react-router-dom";

function Lognav() {

  const navigate = useNavigate();

  function handleLogout() {
    navigate("/home  ");
  }

  return (
    <Navbar bg="dark" variant="dark" className="lognav">
      <Container>

        <Navbar.Brand>
          Softtech
        </Navbar.Brand>

        <Button
          variant="outline-light"
          onClick={handleLogout}
        >
          Logout
        </Button>

      </Container>
    </Navbar>
  );
}

export default Lognav;