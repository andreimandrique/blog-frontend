import LogoutButton from "../components/LogoutButton.jsx";
import {Link} from "react-router";
import useMyBlog from "../hooks/useMyBlog.jsx";

function MyBlog() {

  const {data, loading, error} = useMyBlog();

  const myBlogs = data.map(blog => (
    <div key={blog["blog_id"]}>
      <h1>{blog.title}</h1>
      <Link to={`/dashboard/blog/${blog.blog_id}`}>View</Link>
    </div>
    ))

  return (
    <div>
      <h1>My Blog</h1>
      <Link to="/dashboard/add-blog">Add Blog</Link>
      <LogoutButton/>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
    <div>
      {myBlogs}
    </div>
    </div>
  )
}

export default MyBlog;