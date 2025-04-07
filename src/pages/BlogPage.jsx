import {Link} from "react-router";
import LogoutButton from "../components/LogoutButton.jsx";

function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
      <LogoutButton/>
      <Link to="/dashboard/view-blog">View</Link>
    </div>
  );
}
export default BlogPage;
