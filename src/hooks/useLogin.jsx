import { useState } from "react";
import { useNavigate } from "react-router";

function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_REST_API}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        localStorage.setItem("token", data["token"]);
        navigate("/dashboard");
      }

      if (res.status === 400) {
        setError(data["error"]);
      }

      if (res.status === 401) {
        setError(data["error"]);
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleLogin,
  };
}

export default useLogin;
