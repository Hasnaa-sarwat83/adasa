import { Link } from "react-router-dom"

function BlogCard({ post }) {
  return (
    <article className="blog-card">

      <div className="image-wrapper">

        <img
          src={post.image}
          alt={post.title}
        />

        <span className="card-category">
          {post.category}
        </span>

      </div>

      <div className="blog-card-content">

        <div className="card-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h2>{post.title}</h2>

        <p>{post.excerpt}</p>

        <div className="card-footer">

          <div className="author">
            <span>{post.author.name}</span>
          </div>

          <Link
            to={`/blog/${post.id}`}
            className="read-more"
          >
            ←
          </Link>

        </div>

      </div>

    </article>
  )
}

export default BlogCard