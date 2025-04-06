import { useState } from "react";
import {useNavigate} from "react-router";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.status === 200) {
        const jwtToken = await res.json();
        localStorage.setItem("token", jwtToken["token"]);
        navigate("/dashboard");
      }

      if (res.status === 400) {
        const error = await res.json();
        setError(error["error"]);
      }

      if (res.status === 401) {
        const error = await res.json();
        setError(error["error"]);
      }
    } catch (error) {
      setError(error["error"]);
    }
  };

  return (
    <div>
      <h1>Welcome To Login</h1>
      <p>{error}</p>
      <form>
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
