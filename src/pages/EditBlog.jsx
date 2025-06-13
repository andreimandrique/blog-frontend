import { useParams, Link, useOutletContext } from "react-router";
import { useState, useEffect, useRef } from "react";
import TinyMCE from "../components/TinyMCE.jsx";
import { useNavigate } from "react-router";

function EditBlog() {
  const user = useOutletContext();
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [myBlog, setMyBlog] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [updated, setUpdated] = useState(false);

  const [title, setTitle] = useState("");
  const [published, setPublished] = useState(false);
  const editorRef = useRef(null);

  const token = localStorage.getItem("token");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePublishedChange = (event) => {
    setPublished(event.target.checked);
  };

  const handleEditButton = async () => {
    let editorContent = "";
    if (editorRef.current) {
      editorContent = editorRef.current.getContent();
    }

    const updatedData = {
      blog_id: Number(blogId),
      title: title,
      content: editorContent,
      published: published,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_REST_API}/blogs`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      setUpdated(true);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteButton = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_REST_API}/blogs`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ blog_id: Number(blogId) }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      navigate("/dashboard");
    } catch (err) {
      console.error("Fetch error:", err);
      setError(true);
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_REST_API}/me/${blogId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();
        setMyBlog(data.blog);
        setTitle(data.blog.title);
        setPublished(data.blog.published);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId, token]);

  return (
    <>
      <div className="flex flex-wrap justify-around py-2 border-b-2 border-slate-200">
        <div>
          <h1>Welcome {user.username}</h1>
        </div>
        <div>
          <ul className="flex justify-evenly gap-6">
            <li className="text-blue-600">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="text-blue-600">
              <Link to={`/dashboard/view-blog/${blogId}`}>Go Back</Link>
            </li>
          </ul>
        </div>
      </div>

      {updated && <p>Blog Id {blogId} successfully updated</p>}
      {error && <p>Error</p>}
      {loading && <p>Loading...</p>}

      <div className="ml-2">
        <div>
          <label className="mr-4">Blog Title:</label>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div>
          <label className="mr-4">Published?</label>
          <input
            type="checkbox"
            checked={published}
            onChange={handlePublishedChange}
          />
        </div>
      </div>

      {myBlog && (
        <div>
          <TinyMCE editorRef={editorRef} defaultContent={myBlog.content} />
        </div>
      )}

      <div className="ml-2">
        <p>Published: {String(published)}</p>
      </div>

      <div className="flex flex-wrap gap-4 my-2 ml-2">
        <button
          className="bg-blue-600 rounded-md text-white px-6"
          onClick={handleEditButton}
        >
          Edit
        </button>
        <button
          className="bg-blue-600 rounded-md text-white px-6"
          onClick={handleDeleteButton}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default EditBlog;
