import { useState } from "react"
import blogsData from "../Data/Blogs.json"
import BlogCard from "../components/BlogCard"

function Blog() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [view, setView] = useState("grid")
  const [page, setPage] = useState(1)

  const postsPerPage = 6

  const categories = [
    "All",
    ...new Set(blogsData.posts.map((post) => post.category))
  ]

  const filteredPosts = blogsData.posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === "All" || post.category === category

    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const startIndex = (page - 1) * postsPerPage

  const posts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  )

  return (
    <main className="blog-page">

      <section className="blog-hero">
        <span className="hero-badge">مدونة عدسة</span>

        <h1>
          استكشف <span>مقالاتنا</span>
        </h1>

        <p>
          اكتشف أحدث المقالات والنصائح وأفضل الممارسات لتطوير مهاراتك
        </p>
      </section>

      <section className="blog-controls">

        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="ابحث في المقالات..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
          />
        </div>

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => {
                setCategory(item)
                setPage(1)
              }}
            >
              {item}
            </button>
          ))}
        </div>

      </section>

      <section className="blog-toolbar">

        <span className="results-count">
          عرض {posts.length} مقالات
        </span>

        <div className="view-buttons">

          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            ▦
          </button>

          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            ☰
          </button>

        </div>

      </section>

      <section className={`posts-container ${view}`}>

        {posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}

      </section>

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ‹
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index + 1}
              className={page === index + 1 ? "active" : ""}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          ›
        </button>

      </div>

      <p className="page-info">
        صفحة {page} من {totalPages}
      </p>


    </main>
  )
}

export default Blog