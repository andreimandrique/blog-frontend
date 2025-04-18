import TinyMCE from "../components/TinyMCE.jsx";
import useAddBlog from "../hooks/useAddBlog.jsx";
import { Link } from "react-router";

function AddBlog() {
  const { msg, title, setTitle, editorRef, error, handleAddBlog } =
    useAddBlog();

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <h1>Add Blog</h1>
      {error && <p>{error}</p>}
      {msg && <p>{msg}</p>}
      <form>
        <label>
          Blog Title:
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <TinyMCE editorRef={editorRef} />
        <button onClick={handleAddBlog}>Add blog</button>
      </form>
    </div>
  );
}

export default AddBlog;
