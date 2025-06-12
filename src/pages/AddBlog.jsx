import TinyMCE from "../components/TinyMCE.jsx";
import useAddBlog from "../hooks/useAddBlog.jsx";
import { Link, useOutletContext } from "react-router";

function AddBlog() {
  const user = useOutletContext();
  const { msg, title, setTitle, editorRef, error, handleAddBlog } =
    useAddBlog();

  return (
    <>
      <div className="flex flex-wrap justify-around py-2 border-b-2 border-slate-200">
        <div>
          <h1>Welcome {user.username}</h1>
        </div>
        <div>
          <p className="text-blue-600">
            <Link to="/dashboard">Dashboard</Link>
          </p>
        </div>
      </div>

      {error && <p>{error}</p>}
      {msg && <p>{msg}</p>}

      <form>
        <div className="ml-2">
          <label className="mr-4">Blog Title:</label>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <TinyMCE editorRef={editorRef} />
        <div className="my-2 ml-2">
          <button
            className="bg-blue-600 rounded-md text-white px-6"
            onClick={handleAddBlog}
          >
            Add blog
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBlog;
