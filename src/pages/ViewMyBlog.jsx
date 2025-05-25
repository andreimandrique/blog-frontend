import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";

function ViewMyBlog() {
  const { blogId } = useParams();
  const [myBlog, setMyBlog] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:3000/blogs/me/${blogId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();
        setMyBlog(data.blog);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId, token]);

  return (
    <div>
      <Link to="/dashboard">Go back</Link>
      <div>
        {error && <p>Error</p>}
        {loading && <p>Loading...</p>}
        {myBlog && (
          <div>
            <h1>{myBlog.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: myBlog.content }} />
          </div>
        )}
        <Link to={`/dashboard/edit-blog/${blogId}`}>Edit</Link>
      </div>
    </div>
  );
}

export default ViewMyBlog;
