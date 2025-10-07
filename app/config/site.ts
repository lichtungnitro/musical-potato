/**
 * Site Configuration
 * Centralized configuration for all site metadata, SEO, and branding
 */

export interface SiteConfig {
  baseUrl: string
  site: {
    name: string
    siteName: string
    title: {
      default: string
      template: string
    }
    description: string
  }
  author: {
    name: string
    jobTitle: string
    description: string
    social: {
      github: string
    }
  }
  rss: {
    title: string
    description: string
  }
  pages: {
    home: {
      title: string
    }
    blog: {
      title: string
      description: string
    }
    userStory: {
      title: string
      description: string
    }
  }
  openGraph: {
    locale: string
    type: 'website'
  }
}

export const siteConfig: SiteConfig = {
  // Base URL - Update this with your custom domain
  baseUrl: 'https://charming-bonbon-6fceac.netlify.app',

  // Site Metadata
  site: {
    name: 'Minimal AI',
    siteName: 'Ted Chen',
    title: {
      default: 'Minimal AI',
      template: '%s | Ted Chen',
    },
    description: 'Exploring AI consciousness and philosophy.',
  },

  // Author Information
  author: {
    name: 'Ted Chen',
    jobTitle: 'AI Researcher',
    description: 'AI researcher and philosopher exploring consciousness and machine learning',
    // Add your social media profiles here
    social: {
      github: 'https://github.com/lichtungnitro',
    },
  },

  // RSS Feed
  rss: {
    title: 'Minimal AI',
    description: 'This is my portfolio RSS feed',
  },

  // Page-specific metadata
  pages: {
    home: {
      title: 'My Portfolio',
    },
    blog: {
      title: 'Blog',
      description: 'Read my blog.',
    },
    userStory: {
      title: 'User Story',
      description: 'Read my user story.',
    },
  },

  // Open Graph defaults
  openGraph: {
    locale: 'en_US',
    type: 'website',
  },
}
