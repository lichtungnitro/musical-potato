import { getBlogPosts } from 'app/blog/utils'
import { siteConfig } from 'app/config/site'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = getBlogPosts().map((post) => ({
    url: `${siteConfig.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }))

  const routes = ['', '/blog', '/user-story'].map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date(),
  }))

  return [...routes, ...blogs]
}
