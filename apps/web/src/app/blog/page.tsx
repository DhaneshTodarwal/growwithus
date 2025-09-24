import Link from 'next/link'
import { getAllPosts } from '../../lib/mdx'
import Reveal from '../../components/Reveal'

export const metadata = {
  title: 'Blog | Grow-Withus',
  description: 'Latest insights on AI, apps, and web technology.'
}

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <section className="max-w-6xl mx-auto p-6 md:p-10">
      <Reveal delay={0}><h1 className="text-4xl md:text-6xl font-bold">Blog</h1></Reveal>
      <Reveal delay={100}><p className="subheading mt-3">Latest news and insights from the team.</p></Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="no-fx">{post.title}</Link>
            </h2>
            <p className="text-sm text-text-secondary mt-2">{post.description}</p>
            <div className="mt-3 text-xs text-text-tertiary">{new Date(post.date).toLocaleDateString()} • {post.readingTime}</div>
            <div className="mt-4">
              <Link href={`/blog/${post.slug}`} className="btn btn-secondary">Read more</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
