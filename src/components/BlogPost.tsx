import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "../lib/blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <section className="resume-section">
        <div className="section-inner">
          <h1>Post not found</h1>
          <Link to="/blog">Back to blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="resume-section">
      <div className="section-inner">
        <Link to="/blog" className="blog-back">
          <i className="bi bi-arrow-left" /> All posts
        </Link>
        <article className="blog-post section-card">
          <header className="blog-post__header">
            <h1>{post.title}</h1>
            <time className="blog-card__date">{post.date}</time>
          </header>
          <div className="blog-prose">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </div>
        </article>
      </div>
    </section>
  );
}
