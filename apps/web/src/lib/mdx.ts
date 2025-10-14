import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type PostFrontmatter = {
  title: string
  date: string
  description?: string
  tags?: string[]
  author?: string
  cover?: string
}

export type Post = PostFrontmatter & {
  slug: string
  content: string
  readingTime: string
}

function resolveBlogDir() {
  const cwd = process.cwd()
  const candidates = [
    // When run from monorepo root
    path.join(cwd, 'apps/web/content/blog'),
    // When run from apps/web
    path.join(cwd, 'content/blog'),
  ]
  for (const dir of candidates) {
    if (fs.existsSync(dir)) return dir
  }
  // Fallback to apps/web/content/blog under cwd
  return candidates[0]
}

const BLOG_DIR = resolveBlogDir()

export function getPostSlugs() {
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.(md|mdx)$/i, '')
  // Support both .mdx and .md files
  let fullPath = path.join(BLOG_DIR, `${realSlug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    const mdPath = path.join(BLOG_DIR, `${realSlug}.md`)
    if (fs.existsSync(mdPath)) {
      fullPath = mdPath
    }
  }
  const file = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)
  const fm = data as PostFrontmatter
  return {
    ...fm,
    slug: realSlug,
    content,
    readingTime: readingTime(content).text,
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug))
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}
