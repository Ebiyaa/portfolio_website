import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './features/counterSlice'
import blogReducer from './features/blogSlice';


export default configureStore({
  reducer: {
    // counter: counterReducer,
    blogs: blogReducer,
  }
})


