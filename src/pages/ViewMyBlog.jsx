import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";

function ViewMyBlog() {
  const { blogId } = useParams();

  const [myBlog, setMyBlog] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`http://localhost:3000/blogs/me/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyBlog(data.blog))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
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
      </div>
    </div>
  );
}

export default ViewMyBlog;
