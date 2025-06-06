import { Link } from "react-router";
import useBlog from "../hooks/useBlog.jsx";
import { formatDate } from "date-fns/format";

function Home() {
  const { blog, error, loading } = useBlog();
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="login">Log In</Link>
        </li>
        <li>
          <Link to="signup">Sign Up</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      </ul>
      {error && <p>Error</p>}
      {loading && <p>Loading...</p>}
      {blog && (
        <div>
          {blog.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            blog.map((blog) => (
              <div key={blog.blog_id}>
                <h3>{blog.title}</h3>
                <p>
                  {blog.author.username} {formatDate(blog.created_at, "PP")}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
