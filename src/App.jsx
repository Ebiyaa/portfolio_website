import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

// Import pages
import Home from "./pages/index.jsx";
import Projects from "./pages/projects.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Blog from "./pages/blog.jsx";
import BlogDetail from "./features/blogDetail.jsx";

function App() {
  return (
    <Router>
      <main className="bg-black text-white min-h-screen p-10 font-sans">
        {/* Nav component */}
        <div className="flex justify-between items-center px-8 py-4" style={{ fontFamily: "Pridi, sans-serif" }}>
          <div className="text-green-400 font-bold text-6xl">ek.</div>
          <nav className="bg-[#282828] box-border content-stretch flex gap-[24px] h-[44px] items-start px-[28px] py-[8px] align-items-center relative rounded-[24px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[#3d3d3d] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#27ae60] font-medium" : "text-[#a5a5a5]"
              }
            >
              home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-[#27ae60] font-medium" : "text-[#a5a5a5]"
              }
            >
              projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#27ae60] font-medium" : "text-[#a5a5a5]"
              }
            >
              about me
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-[#27ae60] font-medium" : "text-[#a5a5a5]"
              }
            >
              blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#27ae60] font-medium" : "text-[#a5a5a5]"
              }
            >
              {`let's talk`}
            </NavLink>
          </nav>
        </div>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
