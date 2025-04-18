import LogoutButton from "../components/LogoutButton.jsx";
import {Link} from "react-router";

function MyBlog() {
  return (
    <div>
      <h1>My Blog</h1>
      <Link to="/dashboard/add-blog">Add Blog</Link>
      <LogoutButton/>
    </div>
  )
}

export default MyBlog;