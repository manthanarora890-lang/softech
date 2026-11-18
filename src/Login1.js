import "./First.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login1() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        if (username === "manthan" && password === "12345") {
            navigate("/Dashboard");
        } else {
            alert("Wrong username or password");
        }
    }

    return (
        <div className="login-page">

            <div className="login-box">

                <h2>Welcome Back</h2>
                <p>Login to your account</p>

                <form onSubmit={handleLogin}>

                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login1;