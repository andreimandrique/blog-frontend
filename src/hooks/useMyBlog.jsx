import { useState, useEffect } from "react";

function useMyBlog() {
  const [myBlog, setMyBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3000/blogs/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyBlog(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  });

  return { myBlog, error, loading };
}

export default useMyBlog;
