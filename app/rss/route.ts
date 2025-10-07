import { getBlogPosts } from 'app/blog/utils'
import { siteConfig } from 'app/config/site'

export async function GET(): Promise<Response> {
  const allBlogs = getBlogPosts()

  const itemsXml: string = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${siteConfig.baseUrl}/blog/${post.slug}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        </item>`,
    )
    .join('\n')

  const rssFeed: string = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>${siteConfig.rss.title}</title>
        <link>${siteConfig.baseUrl}</link>
        <description>${siteConfig.rss.description}</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
