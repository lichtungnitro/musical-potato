import Link from 'next/link'
import { useId } from 'react'

const navItems: Record<string, { name: string }> = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/user-story': {
    name: 'user story',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Navbar(): JSX.Element {
  const navId: string = useId()

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id={navId}
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
