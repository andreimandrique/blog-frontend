import {useEffect, useState} from "react";

function useMyBlog() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3000/blogs/me", {
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
      .then((data) => setData(data["blogs"]))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  })

  return {
    data,
    loading,
    error,
  }
}

export default useMyBlog;