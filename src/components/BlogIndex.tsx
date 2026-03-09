import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/blog";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="resume-section">
      <div className="section-inner">
        <h1 className="section-title">Blog</h1>
        {posts.length === 0 && <p className="lead">No posts yet.</p>}
        <div className="blog-list">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card section-card"
            >
              {post.thumbnail && (
                <img
                  className="blog-card__thumb"
                  src={post.thumbnail}
                  alt={post.title}
                />
              )}
              <div className="blog-card__body">
                <h2 className="blog-card__title">{post.title}</h2>
                <time className="blog-card__date">{post.date}</time>
                {post.description && (
                  <p className="blog-card__desc">{post.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
