import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBlogs } from "./blogSlice";
import { Link } from "react-router-dom";
import BlogCard from "./blogCard";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const status = useSelector((state) => state.blogs.status);

  useEffect(() => {
    dispatch(loadBlogs()); // Load blogs from IndexedDB
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load blogs.</p>;

  return (
    <div className="blog-list">
      {blogs.length === 0 ? (
        <p className="text-[20px] text-gray-400">
          No blogs yet. Start writing your first one below!
        </p>
      ) : (
        <>
          {/* <button
            onClick={() => dispatch(clearBlogs())}
            className="mt-5 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Reset Blog
          </button> */}
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default BlogList;
