import { useParams, Link, useOutletContext } from "react-router";
import { useState, useEffect } from "react";

function ViewMyBlog() {
  const user = useOutletContext();
  const { blogId } = useParams();
  const [myBlog, setMyBlog] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_REST_API}/blogs/me/${blogId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

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
    <>
      <div className="flex justify-around py-2 border-b-2 border-slate-200">
        <div>
          <h1>Welcome {user.username}</h1>
        </div>
        <div>
          <p className="text-blue-600">
            <Link to="/dashboard">Dashboard</Link>
          </p>
        </div>
      </div>

      <div>
        {error && <p>Error</p>}
        {loading && <p>Loading...</p>}
        {myBlog && (
          <div className="m-8">
            <h1 className="text-center text-4xl my-4">{myBlog.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: myBlog.content }} />
          </div>
        )}
        <p className="text-center mt-2 text-blue-600">
          <Link to={`/dashboard/edit-blog/${blogId}`}>Edit</Link>
        </p>
      </div>
    </>
  );
}

export default ViewMyBlog;
