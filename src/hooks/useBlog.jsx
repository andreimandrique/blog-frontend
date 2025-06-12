import { useState, useEffect } from "react";

function useBlog() {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_REST_API}blogs`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setBlog(result.blogs);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  return { blog, error, loading };
}

export default useBlog;
