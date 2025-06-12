import { Link } from "react-router";
import useBlog from "../hooks/useBlog.jsx";
import { formatDate } from "date-fns/format";

function Home() {
  const { blog, error, loading } = useBlog();
  return (
    <>
      <div className="flex justify-around py-2 border-b-2 border-slate-200">
        <div>
          <h1>Blog Website</h1>
        </div>
        <div>
          <ul className="flex justify-evenly gap-6">
            <li className="text-blue-600">
              <Link to="login">Log In</Link>
            </li>
            <li className="text-blue-600">
              <Link to="signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      {error && <p>Error</p>}
      {loading && <p>Loading...</p>}

      {blog && (
        <div className="flex flex-wrap gap-6 m-6">
          {blog.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            blog.map((blog) => (
              <div key={blog.blog_id} className="p-2 border-2 border-slate-700">
                <h3 className="text-xl">{blog.title}</h3>
                <p>
                  {blog.author.username} {formatDate(blog.created_at, "PP")}
                </p>
                <p className="text-center mt-2 text-blue-600">
                  <Link to={`/view-blog/${blog.blog_id}`}>View</Link>
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}

export default Home;
