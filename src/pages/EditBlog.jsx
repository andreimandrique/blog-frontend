import { useParams, Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import TinyMCE from "../components/TinyMCE.jsx";

function EditBlog() {
  const { blogId } = useParams();
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
      const res = await fetch("http://localhost:3000/blogs", {
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

  const handleDeleteButton = () => {
    console.log(blogId);
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:3000/blogs/me/${blogId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
    <div>
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to={`/dashboard/view-blog/${blogId}`}>Go back to Blog</Link>
        </li>
      </ul>
      <div>
        <label>
          Blog Title:
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={published}
            onChange={handlePublishedChange}
          />
          Published?
        </label>
        {updated && <p>Blog Id {blogId} successfully edited</p>}
        {error && <p>Error</p>}
        {loading && <p>Loading...</p>}
        {myBlog && (
          <div>
            <TinyMCE editorRef={editorRef} defaultContent={myBlog.content} />
            <p>Published: {String(published)}</p>
          </div>
        )}
        <button onClick={handleEditButton}>Edit</button>
        <button onClick={handleDeleteButton}>Delete</button>
      </div>
    </div>
  );
}

export default EditBlog;
