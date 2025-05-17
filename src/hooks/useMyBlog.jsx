import { useState, useEffect } from "react";

function useMyBlog() {
  const [myBlog, setMyBlog] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:3000/blogs/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setMyBlog(data.blogs);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [token]);

  return { myBlog, error, loading };
}

export default useMyBlog;
