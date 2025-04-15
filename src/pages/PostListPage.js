import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/postSlice";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

function PostListPage() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container my-4">
      <h1 className="mb-4">Blog Gönderileri</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="alert alert-danger">{error}</p>}
      <div className="row">
        {currentPosts.map((post) => (
          <div key={post.id} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body.substring(0, 100)}...</p>
                <Link to={`/posts/${post.id}`} className="btn btn-primary">
                  Detay
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default PostListPage;
