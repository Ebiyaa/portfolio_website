import React from "react";
// import BlogForm from "../features/blogForm";
// import BlogList from "../features/blogList";
// import BlogDetail from "../features/blogDetail";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBlogs } from "../features/blogSlice";
// import BlogCard from "../features/blogCard";
import Hackhive from "../pages/posts/hackhive";
import Iwd from "../pages/posts/iwd";
import Photos from "../pages/posts/photos";
import "../blog.css";

function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogs());
  }, [dispatch]);

  return (
    <div className="p-10">
      <h1 className="text-[64px] font-bold text-white leading-tight max-w-3xl py-10">
        Explore my latest reflections
      </h1>

      {/* <BlogCard /> */}
      <div>
        {/* IWD */}
        <Link to="/iwd" className="blog-card">
          <div className="text">
            <h3 className="text-[28px] font-normal text-white leading-10 max-w-3xl">
              Empowering the next generation: Design, FinTech and International
              Women’s Day at the African Science Academy
            </h3>
          </div>

          <img
            src="../public/images/blog-images/iwd.jpg"
            alt="International Women's Day"
            className="cover"
          />
        </Link>

        {/* Hackhive */}
        <Link to="/hackhive" className="blog-card">
          <div className="text">
            <h3 className="text-[28px] font-normal text-white leading-10 max-w-3xl">
              Bringing HackHive 1.0 to Life - My Journey as Organiser &
              Hackathon Manager
            </h3>
          </div>

          <img
            src="../public/images/blog-images/hackhive.jpg"
            alt="Hackhive 1.0"
            className="cover"
          />
        </Link>

        {/* Photos */}
        <Link to="/photos" className="blog-card">
          <div className="text">
            <h3 className="text-[28px] font-normal text-white leading-10 max-w-3xl">
            Beyond the Lens: A Visual Story of My Work, My Drive, and My Reflections
            </h3>
          </div>

          <img
            src="../public/images/blog-images/pathway.jpg"
            alt="International Women's Day"
            className="cover"
          />
        </Link>

        <Routes>
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/hackhive" element={<Hackhive />} />
          <Route path="/iwd" element={<Iwd />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </div>
  );
}

export default Blog;
