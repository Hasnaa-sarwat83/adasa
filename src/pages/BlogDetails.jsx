import { useParams } from "react-router-dom"
import blogsData from "../Data/Blogs.json"

function BlogDetails() {
  const { id } = useParams()

  const post = blogsData.posts.find(
    (item) => item.id === Number(id)
  )

  if (!post) {
    return <h1>Post Not Found</h1>
  }

  return (
    <div>
      <img src={post.image} alt={post.title} />

      <p>{post.category}</p>

      <h1>{post.title}</h1>

      <p>{post.excerpt}</p>

      <p>{post.content}</p>

      <p>{post.author.name}</p>

      <p>{post.date}</p>

      <p>{post.readTime}</p>
    </div>
  )
}

export default BlogDetails