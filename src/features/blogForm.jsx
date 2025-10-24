import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "./blogSlice";
import { clearBlogs } from "./blogSlice";

const BlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    dispatch(addBlog({ title, content, image }));
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <div className="blog-form">
      <div className="py-8">
        <h2 className="text-[64px] font-bold text-white leading-tight max-w-3xl">
          Blog Publisher
        </h2>
        <p className="text-[20px] font-regular text-gray-400 leading-tight max-w-3xl pt-5">
          Write some content for your blog
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-start justify-between gap-10">
          <div className="form-section">
            <label>Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              placeholder="Uplaod an image"
            />
            {image && (
              <img src={image} alt="cover preview" className="preview" />
            )}
          </div>

          {/* title & content */}
          <div className="flex-4">
            <div className="form-section">
              <label>Enter blog title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Type here"
              />
            </div>

            <div className="form-section">
              <label>Write some content for your blog</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start typing..."
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6 justify-end">   
        
        <button
          onClick={() => dispatch(clearBlogs())}
          className="mt-5 px-4 py-2 bg-white-600 text-white border-1 rounded-full w-90"
        >
          Reset Blog
        </button>
        <button
          type="submit"
          className="inline-block mt-6 px-6 py-2 bg-green-400 text-black font-semibold rounded-full w-90"
        >
          Publish Blog Post
        </button>
        </div> 

      </form>
    </div>
  );
};

export default BlogForm;
