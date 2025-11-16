import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Hackhive from "../pages/posts/hackhive";
import Iwd from "../pages/posts/iwd";
import Photos from "../pages/posts/photos";
import "../blog.css";

// const BlogCard = ({ blog }) => (
//     <Link to={`/blog/${blog.id}`} className="blog-card">
//     <div className="text">
//       <h3 className="text-[28px] font-normal text-white leading-10 max-w-3xl" >{blog.title}</h3>
//     </div>
//     {blog.image && <img src={blog.image} alt={blog.title} className="cover" />}
//   </Link>
// );
{
  /* <p className="truncate">{blog.content}</p> */
}

// export default BlogCard;

export function BlogCard() {
  return (
    <div>

      {/* IWD */}
      <Link to="../pages/posts/iwd.jsx" className="blog-card">
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
      <Link to="../pages/posts/hackhive.jsx" className="blog-card">
        <div className="text">
          <h3 className="text-[28px] font-normal text-white leading-10 max-w-3xl">
            Bringing HackHive 1.0 to Life - My Journey as Organiser & Hackathon
            Manager
          </h3>
        </div>

        <img
          src="../public/images/blog-images/hackhive.jpg"
          alt="Hackhive 1.0"
          className="cover"
        />
      </Link>

      {/* Photos */}
      <Link to="../pages/posts/photos.jsx" className="blog-card">
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

      <Routes>
        <Route path="/blogCard/*" element={<BlogCard />} />
        <Route path="/hackhive" element={<Hackhive />} />
        <Route path="/iwd" element={<Iwd />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default BlogCard;