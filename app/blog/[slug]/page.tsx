import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts } from '../utils'
import { CustomMDX } from '../../components/mdx'
import { siteConfig } from '../../config/site'

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return notFound()
  }

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata
  const ogImage: string = image
    ? image
    : `${siteConfig.baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${siteConfig.baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }: { params: { slug: string } }): JSX.Element {
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${siteConfig.baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${siteConfig.baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: siteConfig.author.name,
              url: siteConfig.baseUrl,
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">{post.metadata.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
