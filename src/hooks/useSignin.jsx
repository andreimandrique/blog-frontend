import { useState } from "react";

function useSignin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_REST_API}/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, password, confirmPassword }),
      });
      const result = await res.json();

      if (!res.ok) {
        setError(result.error);
        setMessage("");
      } else {
        setMessage(result.message);
        setError("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (e) {
      console.log(e);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    loading,
    message,
    handleSignin,
  };
}

export default useSignin;
