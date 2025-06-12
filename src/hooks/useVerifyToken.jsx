import { useState, useEffect } from "react";

function useVerifyToken() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REST_API}verify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Token is invalid");
        }
        return res.json();
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  });
  return { error, loading };
}

export default useVerifyToken;
