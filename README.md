# Leone Ermer Website

A modern, content-focused website built with Astro and deployed on Vercel. This site features dynamic content generation from Markdown files, making it easy to manage blog posts and project showcases.

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator with excellent performance
- **Content**: Markdown/MDX for easy content management
- **Deployment**: [Vercel](https://vercel.com) - Automatic deployments from GitHub
- **Styling**: Scoped CSS in Astro components
- **Type Safety**: TypeScript for better development experience

## Project Structure

```
/
├── public/                 # Static assets (images, fonts, favicon, etc.)
│   └── favicon.svg        # Site favicon
├── src/
│   ├── components/        # Reusable UI components
│   ├── content/           # Content collections (Markdown files)
│   │   ├── blog/          # Blog posts
│   │   │   └── *.md       # Individual blog posts
│   │   ├── projects/      # Project showcases
│   │   │   └── *.md       # Individual projects
│   │   └── config.ts      # Content collection schemas
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/             # File-based routing
│   │   ├── index.astro    # Homepage
│   │   ├── blog/          # Blog pages
│   │   │   ├── index.astro      # Blog listing
│   │   │   └── [...slug].astro  # Individual blog post
│   │   └── projects/      # Project pages
│   │       ├── index.astro      # Projects listing
│   │       └── [...slug].astro  # Individual project
│   ├── styles/            # Global styles (currently using scoped styles)
│   └── utils/             # Utility functions
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── .env.example           # Environment variables template
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Adding Content

#### Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'Brief description of your post'
pubDate: 2024-01-01
tags: ['tag1', 'tag2']
draft: false
---

Your content here...
```

#### Projects

Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: 'Project Name'
description: 'Project description'
pubDate: 2024-01-01
tags: ['web', 'development']
projectUrl: 'https://example.com'
githubUrl: 'https://github.com/username/repo'
featured: true
---

Project details here...
```

### Content Schema

Content collections use Zod schemas defined in `src/content/config.ts`. This provides:

- Type safety for frontmatter
- Automatic validation
- IntelliSense in your editor

## Deployment

### Vercel

This project is configured for automatic deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push to your main branch

The `@astrojs/vercel` adapter is already configured in `astro.config.mjs`.

### Build Output

The site is configured with `output: 'hybrid'` mode, allowing you to:
- Pre-render static pages at build time
- Use server-side rendering when needed
- Get the best of both worlds

## Customization

### Styling

Each Astro component has scoped styles. Global styles can be added to `BaseLayout.astro` or create separate CSS files in `src/styles/`.

### Navigation

Update the navigation links in `src/layouts/BaseLayout.astro`.

### Configuration

- **Astro**: Edit `astro.config.mjs`
- **TypeScript**: Edit `tsconfig.json`
- **Content Collections**: Edit `src/content/config.ts`

## Best Practices

1. **Content Organization**: Keep related content in appropriate collections
2. **Image Optimization**: Use Astro's Image component for optimized images
3. **Performance**: Astro ships zero JavaScript by default - only add when needed
4. **SEO**: Update meta descriptions and titles in your layouts
5. **Markdown**: Use frontmatter for metadata, keep content semantic

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Vercel Documentation](https://vercel.com/docs)
- [MDX Documentation](https://mdxjs.com/)

## License

Copyright © 2024 Leone Ermer. All rights reserved.