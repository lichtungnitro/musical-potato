import { BlogPosts } from 'app/components/posts'
import { siteConfig } from 'app/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: siteConfig.pages.blog.title,
  description: siteConfig.pages.blog.description,
}

export default function Page(): JSX.Element {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
