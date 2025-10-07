import path from 'node:path'
import { CustomMDX } from 'app/components/mdx'
import { siteConfig } from 'app/config/site'
import { getSingleMDX } from 'app/lib/mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: siteConfig.pages.userStory.title,
  description: siteConfig.pages.userStory.description,
}

export default function Page(): JSX.Element {
  const story = getSingleMDX(path.join(process.cwd(), 'app', 'user-story', 'posts', 'example.mdx'))

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">{story.metadata.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{story.metadata.summary}</p>
      </div>
      <article className="prose">
        <CustomMDX source={story.content} />
      </article>
    </section>
  )
}
