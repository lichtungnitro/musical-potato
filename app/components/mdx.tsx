import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'
import { highlight } from 'sugar-high'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

function CustomLink({ href, ...props }: LinkProps) {
  if (href.startsWith('/')) {
    return <Link href={href} {...props} />
  }

  if (href.startsWith('#')) {
    return <a href={href} {...props} />
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: React.ComponentProps<typeof Image>) {
  return <Image {...props} className="rounded-lg" />
}

type CodeProps = { children: string } & React.HTMLAttributes<HTMLElement>

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    )
  }

  Heading.displayName = `Heading${level}`
  return Heading
}

const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
}

export function CustomMDX(props: React.ComponentProps<typeof MDXRemote>) {
  return <MDXRemote {...props} components={{ ...mdxComponents, ...(props.components || {}) }} />
}
