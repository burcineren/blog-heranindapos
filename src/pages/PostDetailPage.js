import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../services/postService";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (err) {
        console.error("Gönderi detayları alınırken hata:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="container my-4">Yükleniyor...</p>;
  if (!post) return <p className="container my-4">Gönderi bulunamadı.</p>;

  return (
    <div className="container my-4">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
    </div>
  );
}

export default PostDetailPage;
