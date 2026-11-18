import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Mart.css";

function Logind() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const navigate = useNavigate();

function handleLogin(e) {
e.preventDefault();

if (username === "manthan" && password === "1234") {
  localStorage.setItem("isLoggedIn", "true");

  window.dispatchEvent(new Event("loginStatusChanged"));

  setError("");
  navigate("/home");
} else {
  setError("Incorrect username or password!");
}

}

return (
<div className="ghar-login-page">
  <Container className="ghar-login-box"> <h2 className="text-center mb-4">Login to Ghar Store</h2>


  <Form onSubmit={handleLogin}>
    <Form.Group className="mb-3">
      <Form.Label>Username</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </Form.Group>

    {error && <p style={{ color: "red" }}>{error}</p>}

    <Button type="submit" variant="success" className="w-100">
      Login
    </Button>
  </Form>
</Container>
</div>

);
}

export default Logind;
