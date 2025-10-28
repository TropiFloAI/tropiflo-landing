import { Link } from 'react-router-dom'
import './Blog.css'

function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Buzz on Wall Street: How a Fruit Fly Outsmarted the Market",
      description: "Exploring the fascinating intersection of biological systems and market dynamics, where a simple fruit fly's behavior patterns revealed unexpected insights into trading strategies and market inefficiencies.",
      link: "https://medium.com/@oz.kilim/the-buzz-on-wall-street-how-a-fruit-fly-outsmarted-the-market-4a2a2bd28c7e",
      date: "October 15, 2024",
      image: "/images/sly.webp"
    }
  ]

  return (
    <div className="blog-container">
      <header className="blog-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Blog</h1>
        <p className="blog-subtitle">Insights from the Alpha discovery lab</p>
      </header>

      <div className="blog-posts">
        {posts.map(post => (
          <article key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <time className="post-date">{post.date}</time>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-description">{post.description}</p>
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="post-link"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog

