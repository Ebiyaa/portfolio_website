import React from "react";
import BlogForm from "../features/blogForm";
import BlogList from "../features/blogList";
import BlogDetail from "../features/blogDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBlogs } from "../features/blogSlice";
import "../blog.css";

function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogs());
  }, [dispatch]);

  return (
      <div className="p-10">
        <h1 className="text-[64px] font-bold text-white leading-tight max-w-3xl">
          Explore my latest reflections
        </h1>
        {/* Blog List and Form*/}
        <BlogList />
        <BlogForm />

         {/* Blog Detail Route */}
        <Routes>
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

      </div>
  );
}

export default Blog;
