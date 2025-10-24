import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const blog = useSelector((state) =>
    state.blogs.blogs.find((b) => b.id === id)
  );

  if (!blog) {
    return (
      <div className="blog-detail not-found">
        <h2>Blog not found</h2>
        <Link to="/blog.jsx">← Back to blogs</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-btn">← Back to blogs</Link>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto mb-4 rounded"
        />
      )}
      <p className="text-lg">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;

