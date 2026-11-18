import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
function Login()
{
      const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username === "manthanarora123@.com" && password === "12345") {
      navigate("/Dashboard");
    } else {
      alert("Wrong username or password");
    }
  }
    return( 
        <center>
        <form>
            username:
             <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
            <br />
            <br />
            <br />
            <br />
            password:
             <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
            <br />
            <br />
            <br />
            <Button variant="warning" onClick={login}>login</Button>
            <Button variant="warning">sign up</Button>
        </form>
        </center>
    );
}
export default Login;