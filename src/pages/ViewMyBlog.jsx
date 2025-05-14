import { useParams, Link } from "react-router";

function ViewMyBlog() {
  const { blogId } = useParams();

  return (
    <div>
      <Link to="/dashboard">Go back</Link>
      <h3>{blogId}</h3>
    </div>
  );
}

export default ViewMyBlog;
