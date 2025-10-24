import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBlogs, addBlogToDB, deleteBlogFromDB, clearBlogsFromDB } from '../utils/indexedDB';

// --- Initial State ---
const initialState = {
  blogs: [],
  status: 'idle',
};

// --- Async Thunk to Load Blogs ---
export const loadBlogs = createAsyncThunk('blogs/loadBlogs', async () => {
  const blogs = await getAllBlogs(); // Fetch blogs from IndexedDB
  return blogs; // This will be the payload for loadBlogs.fulfilled
});

// --- Blog Slice ---
const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      const newBlog = {
        id: Date.now().toString(),
        ...action.payload,
      };
      state.blogs.push(newBlog);

      // --- Save to IndexedDB ---
      addBlogToDB(newBlog);
    },

    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((b) => b.id !== id);

      // --- Remove from IndexedDB ---
      deleteBlogFromDB(id);
    },

    clearBlogs: (state) => {
      state.blogs = [];

      // --- Clear IndexedDB ---
      clearBlogsFromDB();},
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload || [];
        state.status = 'succeeded';
      })
      .addCase(loadBlogs.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addBlog, deleteBlog, clearBlogs } = blogSlice.actions;
export default blogSlice.reducer;

