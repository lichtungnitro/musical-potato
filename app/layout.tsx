import './global.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import Footer from './components/footer'
import { Navbar } from './components/nav'
import { siteConfig } from './config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: siteConfig.site.title,
  description: siteConfig.site.description,
  openGraph: {
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.site.siteName,
    locale: siteConfig.openGraph.locale,
    type: siteConfig.openGraph.type,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: string[]): string => classes.filter(Boolean).join(' ')

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: siteConfig.author.name,
              url: siteConfig.baseUrl,
              description: siteConfig.author.description,
              jobTitle: siteConfig.author.jobTitle,
            }),
          }}
        />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
