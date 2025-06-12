import LogoutButton from "../components/LogoutButton.jsx";
import { Link, useOutletContext } from "react-router";
import useMyBlog from "../hooks/useMyBlog.jsx";

function MyBlog() {
  const { myBlog, error, loading } = useMyBlog();
  const user = useOutletContext();

  return (
    <>
      <div className="flex justify-around py-2 border-b-2 border-slate-200">
        <div>
          <h1>Welcome {user.username}</h1>
        </div>
        <div className="flex justify-evenly gap-6">
          <p className="text-blue-600">
            <Link to="/dashboard/add-blog">Add Blog</Link>
          </p>
          <p className="text-blue-600">
            <LogoutButton />
          </p>
        </div>
      </div>

      {error && <p>Error</p>}
      {loading && <p>Loading...</p>}
      {myBlog && (
        <div className="flex flex-wrap gap-6 m-6">
          {myBlog.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            myBlog.map((blog) => (
              <div key={blog.blog_id} className="p-2 border-2 border-slate-700">
                <h3>{blog.title}</h3>
                <p className="text-center mt-2 text-blue-600">
                  <Link to={`/dashboard/view-blog/${blog.blog_id}`}>View</Link>
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}

export default MyBlog;
