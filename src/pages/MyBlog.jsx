import LogoutButton from "../components/LogoutButton.jsx";
import { Link } from "react-router";
import useMyBlog from "../hooks/useMyBlog.jsx";

function MyBlog() {
  const { myBlog, error, loading } = useMyBlog();

  return (
    <div>
      <h1>My Blog</h1>
      <Link to="/dashboard/add-blog">Add Blog</Link>
      <LogoutButton />
      <div>
        {error && <p>Error</p>}
        {loading && <p>Loading...</p>}
        {myBlog && (
          <div>
            {myBlog.length === 0 ? (
              <p>No blogs found.</p>
            ) : (
              myBlog.map((blog) => (
                <div key={blog.blog_id}>
                  <h3>{blog.title}</h3>
                  <Link to={`/dashboard/view-blog/${blog.blog_id}`}>View</Link>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBlog;
