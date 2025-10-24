import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../blog.css';


const BlogCard = ({ blog }) => (
    <Link to={`/blog/${blog.id}`} className="blog-card">
    <div className="text">
      <h3 className="text-[28px] font-normal text-white leading-10 max-w-3xl" >{blog.title}</h3>
      {/* <p className="truncate">{blog.content}</p> */}
    </div>
    {blog.image && <img src={blog.image} alt={blog.title} className="cover" />}
  </Link>
);

export default BlogCard;
