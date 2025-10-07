import type { MetadataRoute } from 'next'
import { getBlogPosts } from './blog/utils'
import { siteConfig } from './config/site'

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
