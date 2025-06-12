import { useRef, useState } from "react";

function useAddBlog() {
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const editorRef = useRef(null);

  const token = localStorage.getItem("token");

  const handleAddBlog = async (e) => {
    e.preventDefault();

    setMsg("");
    setError("");

    let editorContent = "";
    if (editorRef.current) {
      editorContent = editorRef.current.getContent();
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_REST_API}blogs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, content: editorContent }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setMsg(data["message"]);
        setTitle("");

        if (editorRef.current) {
          editorRef.current.setContent("");
        }
      }

      if (res.status === 400) {
        setError(data["error"]);
      }

      if (res.status === 500) {
        setError("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return {
    msg,
    title,
    setTitle,
    editorRef,
    error,
    handleAddBlog,
  };
}

export default useAddBlog;
