import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import BlogDetails from "./Pages/BlogDetails"
import NotFound from "./Pages/NotFound"
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog/:slug" element={<BlogDetails />} />
  <Route path="*" element={<NotFound />} />
</Routes>
<Footer />
    </BrowserRouter>
  )
}

export default App