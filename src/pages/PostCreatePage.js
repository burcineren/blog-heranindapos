import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/postService";

function PostCreatePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    try {
      const newPost = await createPost(title, body);
      console.log("Yeni gönderi:", newPost);
      setSuccess(true);
      setTitle("");
      setBody("");
      setTimeout(() => navigate("/posts"), 500);
    } catch (error) {
      console.error("Gönderi oluşturulurken hata:", error);
    }
  };

  return (
    <div className="container my-4">
      <h2>Yeni Gönderi Oluştur</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Başlık
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Gönderi başlığı"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            İçerik
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="5"
            placeholder="Gönderi metni"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        {success && (
          <div className="alert alert-success">
            Gönderi oluşturuldu! Yönlendiriliyorsunuz...
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Oluştur
        </button>
      </form>
    </div>
  );
}

export default PostCreatePage;
