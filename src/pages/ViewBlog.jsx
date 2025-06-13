import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { formatDate } from "date-fns/format";

function ViewBlog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_REST_API}/blogs/${blogId}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        const result = await res.json();
        setBlog(result.blogs[0]);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  return (
    <>
      <div className="flex justify-around py-2 border-b-2 border-slate-200">
        <div>
          <h1>Blog Website</h1>
        </div>
        <div>
          <ul className="flex justify-evenly gap-6">
            <li className="text-blue-600">
              <Link to="/login">Log In</Link>
            </li>
            <li className="text-blue-600">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      {error && <p>Error</p>}
      {loading && <p>Loading...</p>}
      {blog && (
        <div className="m-8">
          <h1 className="text-center text-4xl my-4">{blog.title}</h1>
          <p className="text-center my-4">
            {blog.author.username} {formatDate(blog.created_at, "PP")}
          </p>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      )}
      <p className="text-center mt-2 text-blue-600">
        <Link to="/">Go Back</Link>
      </p>
    </>
  );
}

export default ViewBlog;
