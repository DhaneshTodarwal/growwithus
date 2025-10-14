import Image from 'next/image'
import TiltCard from './TiltCard'
// Local image downloaded by the user (root-level /images)
// Using a static import ensures Next bundles and serves this image correctly
// Moved images into public/images so we can reference them by path string
const aiNews = '/images/AI-news.webp'
const webDevImg = '/images/Web-devlopment.avif'
const businessStrategyImg = '/images/business-strategy.avif'

export default function BlogSection() {
  const blogPosts = [
    {
      id: "ai-trends-2025",
      title: "AI Trends Shaping Business in 2025",
      excerpt: "AI agents, multimodal models, on-device inference, RAG 2.0, and responsible AI are moving from pilots to production in 2025—reshaping CX, operations, and product roadmaps.",
      category: "AI & Technology",
      readTime: "5 min read",
      publishDate: "Sep 18, 2025",
      author: "Alex Chen",
      slug: "ai-trends-shaping-business-2025",
      image: aiNews,
      alt: "AI trends banner with gradients"
    },
    {
      id: "web-performance-guide",
      title: "The Complete Guide to Web Performance Optimization",
      excerpt: "Learn proven strategies to make your website lightning-fast, improve user experience, and boost your search engine rankings with our comprehensive guide.",
      category: "Web Development",
      readTime: "8 min read",
      publishDate: "Dec 12, 2023",
      author: "Sarah Johnson",
      slug: "complete-guide-web-performance-optimization",
      image: webDevImg,
      alt: "Web development performance banner"
    },
    {
      id: "choosing-tech-stack",
      title: "How to Choose the Right Tech Stack for Your Startup",
      excerpt: "Making the right technology decisions early can save your startup time, money, and headaches. Here's how to evaluate and choose the perfect tech stack.",
      category: "Business Strategy",
      readTime: "6 min read",
      publishDate: "Dec 8, 2023",
      author: "Michael Rodriguez",
      slug: "choosing-right-tech-stack-startup",
      image: businessStrategyImg,
      alt: "Business strategy banner"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Latest Insights</h2>
          <p className="subheading max-w-2xl mx-auto">
            Stay ahead of the curve with our latest thoughts on technology, 
            business strategy, and digital innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <TiltCard key={post.id}>
            <article 
              className="card group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Blog Post Image */}
              <div className="w-full h-48 rounded-lg mb-6 overflow-hidden relative">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                  unoptimized
                />
              </div>

              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-medium rounded-full mb-3">
                {post.category}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-primary transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="leading-relaxed mb-4 opacity-80">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm opacity-60">
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
              
              <div className="text-xs opacity-50 mt-1">
                {post.publishDate}
              </div>

              {/* Read More Link */}
              <div className="mt-6">
                <div className="flex items-center text-accent-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
                  <span>Read More</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
            </TiltCard>
          ))}
        </div>

        {/* View All Blog Posts Button */}
        <div className="text-center mt-12">
          <a href="/blog" className="btn btn-outline">
            <span>View All Posts</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
