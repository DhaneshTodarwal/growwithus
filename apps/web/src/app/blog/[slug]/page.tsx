import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '../../../lib/mdx'
import { MDXComponents } from '../../../mdx/components'
import { siteConfig } from '../../../config/site'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug)
    const title = `${post.title} | ${siteConfig.name}`
    const description = post.description || siteConfig.description
    const url = `${siteConfig.url}/blog/${post.slug}`
    return {
      title,
      description,
      openGraph: {
        title: post.title,
        description,
        url,
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
      },
    }
  } catch {
    return { title: siteConfig.name }
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    post = getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto p-6 md:p-10 prose dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="text-sm text-text-tertiary">{new Date(post.date).toLocaleDateString()} • {post.readingTime}</p>
      <div className="mt-6">
        <MDXRemote source={post.content} components={MDXComponents as any} />
      </div>
    </article>
  )
}
